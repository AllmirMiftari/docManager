import Image from 'next/image';
import React, { useState } from 'react'
import UserTypeSelector from './UserTypeSelector';
import { Button } from './ui/button';
import { removeCollaborator, updateDocumentAccess } from '@/lib/actions/room.actions';

const Collaborator = ({ roomId, creatorId, collaborator, email, user }: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || 'viewer');
  const [loading, setLoading] = useState(false);

  const shareDocumentHandler = async (type: string) => {
    setLoading(true);

    await updateDocumentAccess({ 
      roomId, 
      email, 
      userType: type as UserType, 
      updatedBy: user 
    });

    setLoading(false);
  }

  const removeCollaboratorHandler = async (email: string) => {
    setLoading(true);

    await removeCollaborator({ roomId, email });

    setLoading(false);
  }

  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-2">
        <Image 
          src={collaborator.avatar}
          alt='name'
          width={36}
          height={36}
          className="size-9 rounded-full"
        />
        <div className='mt-2'>
          <p className="text-sm font-light text-grey-600">
            {collaborator.email}
          </p>
        </div>
      </div>

      {creatorId === collaborator.id ? (
        <p className="text-sm text-grey-600">Owner</p>
      ): (
        <div className="flex items-center">
          <UserTypeSelector 
            userType={userType as UserType}
            setUserType={setUserType || 'viewer'}
            onClickHandler={shareDocumentHandler}
          />
          <Button type="button" onClick={() => removeCollaboratorHandler(collaborator.email)}>
            Remove
          </Button>
        </div>
      )}
    </li>
  )
}

export default Collaborator