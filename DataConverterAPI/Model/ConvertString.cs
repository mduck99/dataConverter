using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataConverterAPI.Model
{
    public class ConvertString
    {
        public ConvertString(string type, string value)
        {
            Type = type;
            Value = value;
        }

        public String Type { get; set; }
        public String Value { get; set; }

        public String toString()
        {
            String s;
            switch (Type)
            {
                case "Base64":
                    var base64EncodedBytes = System.Convert.FromBase64String(Value);
                    s = System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
                    break;
                case "Hex":
                    var sb = new StringBuilder();
                    for (var i = 0; i < Value.Length; i += 2)
                    {
                        var hexChar = Value.Substring(i, 2);
                        sb.Append((char)Convert.ToByte(hexChar, 16));
                    }
                    s = sb.ToString();
                    break;
                case "ASCII":
                    String[] strArr = Value.Split();
                    s = "";
                    for (int i = 0; i < strArr.Length; i++)
                    {
                        int temp = Convert.ToInt32(strArr[i]);
                        char c = Convert.ToChar(temp);
                        s += c;
                    }
                    break;
                default:
                    s = Value;
                    break;
            }
            return s;
        }
    }
}
