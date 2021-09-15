using DataConverterAPI.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
using System.Web.Http;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DataConverterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConvertController : ControllerBase
    {
        [Route("hex")]
        [HttpPost]
        public JsonResult toHex(ConvertString value)
        {
            if(value.Value == null)
            {
                return new JsonResult("Error!");
            }
            String s = value.toString();
            byte[] bytes = Encoding.Default.GetBytes(s);
            String res = BitConverter.ToString(bytes);
            res = res.Replace("-", "");
            value.Type = "hex";
            value.Value = res;
            return new JsonResult(value.Value);
        }

        [Route("base64")]
        [HttpPost]
        public JsonResult toBase64(ConvertString value)
        {
            if (value.Value == null)
            {
                return new JsonResult("Error!");
            }
            String s = value.toString();
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(s);
            value.Type = "base64";
            value.Value = System.Convert.ToBase64String(plainTextBytes);
            return new JsonResult(value.Value);
        }

        [Route("ascii")]
        [HttpPost]
        public JsonResult toASCII(ConvertString value)
        {
            if (value.Value == null)
            {
                return new JsonResult("Error!");
            }
            String s = value.toString();
            String res = "";
            foreach (char c in s)
            {
                res += System.Convert.ToInt32(c) + " ";
            }
            res = res.Remove(res.Length - 1);
            value.Type = "ascii";
            value.Value = res;
            return new JsonResult(value.Value);
        }

        [Route("string")]
        [HttpPost]
        public JsonResult toString(ConvertString value)
        {
            if (value.Value == null)
            {
                return new JsonResult("Error!");
            }
            String s = value.toString();
            value.Type = "string";
            value.Value = s;
            return new JsonResult(value.Value);
        }
    }
}
