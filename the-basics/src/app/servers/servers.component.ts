import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No server was created";
  servers = ['Test Server', 'Fake Server'];
  serverCreated = false;
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 3000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}.`;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
