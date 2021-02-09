import React from "react";

import person from "../../assets/dev_person.svg";

import { FoldersList } from "../../ui";

const data = [
  {
    title: "Folder1",
    fingerprints: "3",
    users: [
      { name: "Alex Carl", avatar: person },
      { name: "Ralph Edwards", avatar: person },
      { name: "Devon Lane", avatar: person },
    ],
    state: "selected",
  },
  {
    title: "Admin Folder",
    fingerprints: "0",
    users: [{ name: "Arlene McCoy", avatar: person }],
  },
  {
    title: "Farming Cookie",
    fingerprints: "0",
    users: [{ name: "Ralph Edwards", avatar: person }],
  },
];

const FoldersPage: React.FC = () => {
  const [folders, setFolders] = React.useState<any[]>(data);
  const handleUpdateFolders = (newFolder: any) =>
    setFolders([...folders, newFolder]);
  return (
    <div className="folders-page">
      <FoldersList
        title="Folders"
        folders={folders}
        updateFolders={handleUpdateFolders}
      />
    </div>
  );
};

export default FoldersPage;
