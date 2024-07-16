using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos;
public class CreateANewPasswordDto
{
    public string ForgotPasswordValue { get; set; }
    public string NewPassword { get; set; }
}
