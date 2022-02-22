import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/auth/auth.service';
import { AxiosInterceptor } from 'src/app/auth/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  addUserform!: FormGroup;
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.addUserform = new FormGroup({
      slug: new FormControl('', [Validators.required]),
      user_name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
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
        console.log(error)
      })
    }
   
   
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
}
