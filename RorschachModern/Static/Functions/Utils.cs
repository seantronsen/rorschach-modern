using System.IO;
using System.Linq;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Advanced;
using SixLabors.ImageSharp.Formats;

namespace RorschachModern.Static
{
    public static class Utils
    {

        public static string ImageFileToBase64String(string path)
        {
            IImageFormat format;
            using Image image = Image.Load(path, out format);
            return image.ToBase64String(format);
        }

        public static string ImageByteArrayToBase64String(byte[] bytes)
        {
            IImageFormat format;
            using Image image = Image.Load(bytes, out format);
            return image.ToBase64String(format);
        }

        public static byte[] ImageFileToByteArray(string path)
        {
            IImageFormat format;
            using Image image = Image.Load(path, out format);
            using var ms = new MemoryStream();
            image.Save(ms, format);
            return ms.ToArray();

        }

    }
}
