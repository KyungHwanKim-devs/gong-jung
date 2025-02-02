export const downloadImage = async (
  imageResponse: any,
  fileName: string = "defaultName"
) => {
  if (!imageResponse) return;

  const blob = await imageResponse.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);

  a.click();

  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
