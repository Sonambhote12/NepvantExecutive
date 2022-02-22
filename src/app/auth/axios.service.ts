import { Injectable } from "@angular/core";
import axios from "axios";
import Swal from "sweetalert2";



axios.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token');
  (config.headers as any).Authorization = token;
},(error) =>{
    return Promise.reject(error);
});

axios.interceptors.response.use((response)=>{
  return response.data
}, (error)=>{
  if(error.response.status === 401){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Not authenticated!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  else if(error.response.status === 403){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Access token doesnot have the required permission!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
    localStorage.removeItem('token')
    window.location.href='/login'
  } else if(error.response.status === 500){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal server error!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
})

@Injectable()
export class AxiosInterceptor{

    
}
