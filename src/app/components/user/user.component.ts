import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { UsersListService } from 'src/app/service/users-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  rowData;

  constructor(
    private srv:UsersListService,
    private activatedRoute:ActivatedRoute
  ){}
  
  ngOnInit(): void {
    //Resolver
    this.activatedRoute.data.subscribe(data=>{
      console.log(data);
    }) 
  }

  //Ag-Grid

  public columnDefs: ColDef[] = [
    {
      headerName: "Id",
      field: "id",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: "Name",
      field: "name",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: "User Name",
      field: "username",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: "E-mail",
      field: "email",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: "Phone",
      field: "phone",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: "Website",
      field: "website",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
    {
      headerName: "Website",
      field: "website",
      filter: "agTextColumnFilter",
      sortable: true,
      floatingFilter: true,
      resizable: true,
    },
  ];
  public rowSelection: 'single' | 'multiple' = 'single';
  
  onGridReady(params: GridReadyEvent) {
    let resolvedData = this.activatedRoute.snapshot.data['userResolver'];
    this.rowData = resolvedData;
  }

}
