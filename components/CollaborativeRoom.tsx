"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Editor } from "./editor/Editor";
import Header from "./Header";
import ActiveCollaborators from "./ActiveCollaborators";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { updateDocument } from "@/lib/actions/room.actions";
import Loader from "./Loader";
import ShareModal from "./ShareModal";


function CollaborativeRoom({ roomId, roomMetadata, users, currentUserType }: CollaborativeRoomProps) {

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setLoading(true);

      try {
        if (documentTitle !== roomMetadata.title) {
          const updatedDocument = await updateDocument(roomId, documentTitle);

          if (updatedDocument) {
            setEditing(false);
          }
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setEditing(false);
        updateDocument(roomId, documentTitle);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [documentTitle]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header className="relative flex items-center justify-between p-5 bg-indigo-800">
            {/* Left: Logo */}
            <div>
              <Link href="/" className="text-2xl text-white font-semibold">
                DocManager
              </Link>
            </div>

            {/* Center: Title (absolutely centered) */}
            <div
              ref={containerRef}
              className="absolute left-1/2 transform -translate-x-1/2 text-xl text-white flex items-center gap-2"
            >
              {editing && !loading ? (
                <Input
                  type="text"
                  value={documentTitle}
                  ref={inputRef}
                  placeholder="Enter title"
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  onKeyDown={updateTitleHandler}
                  disabled={!editing}
                  className="text-white px-2 py-1 rounded-md"
                />
              ) : (
                <p className="truncate max-w-[300px] text-center">
                  {documentTitle}
                </p>
              )}

              {currentUserType === "editor" && !editing && (
                <Image
                  src="/assets/icons/edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => setEditing(true)}
                  className="cursor-pointer"
                />
              )}

              {loading && <p className="text-sm text-gray-300">saving ...</p>}
            </div>

            {/* Right: User and collaboration buttons */}
            <div className="flex items-center gap-2">

              <ShareModal
              roomId={roomId}
              collaborators={users}
              creatorId={roomMetadata.creatorId}
              currentUserType={currentUserType}
              />

              <ActiveCollaborators />

              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>

          <Editor roomId={roomId} currentUserType={currentUserType}/>
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default CollaborativeRoom;
