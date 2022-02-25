import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string = '';
  addUserform!: FormGroup;
  restform!: FormGroup;
  public showPassword: boolean = false;
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.addUserform = new FormGroup({
      slug: new FormControl('', [Validators.required]),
      user_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.restform = new FormGroup({
      email: new FormControl(''),
      slug: new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.addUserform.value);
    if(this.addUserform.value){
      this.auth.loginUser(this.addUserform.value).then((res)=>{
        console.log(res.data);
        if(res.data.success){
          localStorage.setItem("token",res.data.message.token);
           console.log(res.data.message)
           this.router.navigate(['admin'])
        }
      }).catch((error) => {
        this.error = 'An error occured';
        this.error = error.response.data.message;
        console.log(this.error)
        console.log(error.response.data.message)
      })
    }
   
   
  }
  reset(){
    console.log(this.restform.value);
      this.auth.forgotPassword(this.restform.value).then((res) =>{
        console.log(res.data)
      })
   
  }

  get slug(){
    return this.addUserform.get('slug');
  }
  get username(){
    return this.addUserform.get('user_name');
  }
  get password(){
    return this.addUserform.get('password');
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
