export default function ImportFiles() {
  const handleFileInputChange = (event) => {
    const selectFiles = Array.from(event.target.files);
    selectFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileData = reader.result;
        const fileObject = {
          name: file.name,
          data: new Uint8Array(fileData),
        };

        window.electronAPI.sendToElectron("music-upload", fileObject);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div className="mb-3">
      <label
        className="block text-lg font-medium text-gray-400 mb-1"
        htmlFor="formFileMultiple"
      >
        Importar Musicas
      </label>
      <input
        className="block w-full cursor-pointer rounded-lg border border-gray-600 bg-gray-800 text-sm text-slate-400 file:mr-4 file:rounded-md file:border-0 file:bg-gray-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-600"
        type="file"
        id="formFileMultiple"
        multiple
        accept=".mp3,.wav"
        onChange={handleFileInputChange}
      />
    </div>
  );
}
