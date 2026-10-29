import FileUploadButton from "../components/ui/FileUploadButton";

export default function Home() {
  return (
    <div className="flex flex-col place-items-center w-full md:w-1/2 lg:w-1/3">
      <h1>Scrapr</h1>
      <FileUploadButton />
    </div>
  );
}
