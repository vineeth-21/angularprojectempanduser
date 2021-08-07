import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  title :string ="Update User"
   user:any ={}
  constructor(public service: HttppostService,public route : ActivatedRoute,public router: Router,public toast : ToastrService) { }

  ngOnInit(): void {
    this.fetch(this.route.snapshot.paramMap.get('emailid'))
  }
  fetch(email:any){
    console.log("fetch",email)
    let obj = {
      "id": "1", "jsonrpc": "2.0", "method": "rpcService.GetUserByEmail", "params": [
        { "emailid": email  }] 
      }
      this.service.invoke(obj).subscribe(result =>{
      console.log(result)
      this.user = result.result
   })
  }
  update(user:any){
    let obj1 = { "id":"1","jsonrpc":"2.0","method":"rpcService.UpdateUser","params":[user]  }
        
    this.service.invoke(obj1).subscribe(result =>{
    console.log(result)
    if (result.error==null){
      
       this.toast.success("updated successfully")
       
    }else{
       this.toast.error(result.error)
       
    }
    this.router.navigate(['/userdetails'])
  })
  
}
  }


