using Business.Abstract;
using Microsoft.AspNetCore.Http;
using System.Net;

namespace Business.Concrete;
public class FileManager : IFileService
{
    public string FileSaveToServer(IFormFile file, string filePath)
    {
        var fileFormat = file.FileName.Substring(file.FileName.LastIndexOf('.'));
        fileFormat = fileFormat.ToLower();
        string fileName = Guid.NewGuid().ToString() + fileFormat;
        string path = filePath + fileName;
        using (var stream = System.IO.File.Create(path))
        {
            file.CopyTo(stream);
        }
        return fileName;
    }

    public string FileSaveToFtp(IFormFile file)
    {
        var fileFormat = file.FileName.Substring(file.FileName.LastIndexOf('.'));
        fileFormat = fileFormat.ToLower();
        string fileName = Guid.NewGuid().ToString() + fileFormat;
        FtpWebRequest request = (FtpWebRequest)WebRequest.Create("FTP Adresimiz yazılacak" + fileName);
        request.Credentials = new NetworkCredential("Kullanıcı adı", "Şifre");
        request.Method = WebRequestMethods.Ftp.UploadFile;

        using (Stream ftpStream = request.GetRequestStream())
        {
            file.CopyTo(ftpStream);
        }

        return fileName;
    }

    public byte[] FileConvertByteArrayToDatabase(IFormFile file)
    {
        using (var memoryStream = new MemoryStream())
        {
            file.CopyTo(memoryStream);
            var fileBytes = memoryStream.ToArray();
            string fileString = Convert.ToBase64String(fileBytes);
            return fileBytes;
        }
    }

    public void FileDeleteToServer(string path)
    {
        try
        {
            if (System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
            }
        }
        catch (Exception)
        {
        }
    }

    public void FileDeleteToFtp(string path)
    {
        try
        {
            FtpWebRequest request = (FtpWebRequest)WebRequest.Create("ftp adresi" + path);
            request.Credentials = new NetworkCredential("kullanıcı adı", "şifre");
            request.Method = WebRequestMethods.Ftp.DeleteFile;
            FtpWebResponse response = (FtpWebResponse)request.GetResponse();
        }
        catch (Exception)
        {
        }
    }
}
