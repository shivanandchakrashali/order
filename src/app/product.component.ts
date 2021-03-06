 
import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers  } from '@angular/http';

import { ProductService } from './product.service';
import { EditItemComponent } from './edit-item/edit-item.component';

import {Post} from './post';

@Component ({
   selector: 'my-product',
//    template: 'Products',
templateUrl: 'product.component.html',
styleUrls: ['./product.component.css']
})
export   class   Appproduct implements OnInit {
 
 result:Post[];
 opalName: string;
 allItemDetails:Post[];

 selectedRow : Number;
 
 
 dleteall:Object={};
 
 constructor(private module: ProductService,private  http: Http) {
 
 


  
}
nameEdit:string;

setClickedRow = function(details)
  {
     
    alert(details);
    console.log(details);
    
    var nameEdit=details.itemName;
     
  };

  deleteRow= function(itemdel)
  {
     
    alert(itemdel);
    console.log(itemdel.itemName);
    var nameDel=itemdel.itemName
    var nameId=itemdel._id;
    this.dleteall=
    {
      name:nameDel,
      id:nameId

    }

    
    // this.module.deleteDetails(dletename).subscribe(deletedata => this.alldelte = deletedata);
    // console.log(this.alldelte)

    this.http.delete('/onedelete'+nameId,{})
  .subscribe(data => {console.log(data);

    
}); 
 

  };
  
  message:string;
  ngOnInit() {
    
  	this.module.currentMessage.subscribe(message => this.message = message) 

    // this.module.projectDetails().subscribe(moduleData => this.result = moduleData);
    // console.log(this.result)

    this.module.configDetails().subscribe(moduleData => this.allItemDetails = moduleData);
    console.log(this.result)

    
}
}