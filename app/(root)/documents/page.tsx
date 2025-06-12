import AddDocumentButton from "@/components/AddDocumentButton";
import Header from "@/components/Header";
import { getDocuments } from "@/lib/actions/room.actions";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { dateConverter } from "@/lib/utils";

export default async function Home() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("sign-in");

  const roomDocuments = await getDocuments(
    clerkUser.emailAddresses[0].emailAddress
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <Header className="sticky top-0 z-50">
        <div className="flex items-center justify-between w-full">
        <Link href="/" className="text-2xl font-bold text-indigo-600">DocManager</Link>
        <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      <section className="flex flex-col items-center justify-center gap-6 px-4 py-16">
        {roomDocuments.data.length > 0 ? (
          <div className="document list-container bg-white p-6 rounded-2xl shadow-md">
            <div className="document list-title flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 mr-6">
                All Documents
              </h3>
              <AddDocumentButton
                userId={clerkUser.id}
                email={clerkUser.emailAddresses[0].emailAddress}
              />
            </div>

            <ul className="document-ul space-y-4">
              {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
                <li
                  key={id}
                  className="document-list-item border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Link
                    href={`/documents/${id}`}
                    className="flex flex-1 items-center gap-4 p-4"
                  >
                    <div className="rounded-md bg-gray-100 p-2 sm:block">
                      <Image
                        src="/assets/icons/doc.svg"
                        alt="file"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="line-clamp-1 text-lg font-medium text-gray-800">
                        {metadata.title}
                      </p>
                      <p className="text-sm font-light text-gray-500">
                        Created about {dateConverter(createdAt)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <Image
              src="/assets/icons/doc.svg"
              alt="Document"
              width={64}
              height={64}
              className="mx-auto"
            />
            <p className="text-gray-600 text-sm">
              No documents yet. Get started by adding your first one.
            </p>
            <AddDocumentButton
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )}
      </section>
    </main>
  );
}
