export default function ImportFiles() {
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
      />
    </div>
  );
}