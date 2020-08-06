import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wiffle-ball-register-form',
  templateUrl: './wiffle-ball-register-form.component.html',
  styleUrls: ['./wiffle-ball-register-form.component.scss']
})
export class WiffleBallRegisterFormComponent implements OnInit, OnChanges {




  @Input()
  type: string;


  teamName: string;
  email: string;
  phone: string;
  selectedColor: string;
  memberCount: number;
  memberTotal: number;
  finalTotal: string;

  paypalTotal: string;

  members: Array<any> = [
    {name: '', shirt_size: ''},
    {name: '', shirt_size: ''},
    {name: '', shirt_size: ''},
    {name: '', shirt_size: ''},
    {name: '', shirt_size: ''}
  ];

  valid: boolean;


  constructor(private register: RegisterService, private router: Router) {
    this.type = '';
    this.members = new Array(0);
    this.valid = true;
  }



  ngOnInit() {

  }

  addNewMember() {
    this.members.push(new Member());
    this.calculateTotals();
  }

  removeMember() {
    if (this.type.toLowerCase() === 'competitive') {
      if (this.members.length > 4) {
        this.members.splice(this.members.length - 1, this.members.length);
      }
    }

    if (this.type.toLowerCase() === 'friendly') {
      if (this.members.length > 5) {
        this.members.splice(this.members.length - 1, this.members.length);
      }
    }

    this.calculateTotals();
  }

  submitTeam() {
    this.register.submitTeam(this.selectedColor, this.type.toLowerCase()).subscribe(data => {
      if (data === true) {
        this.registerTeam();
      } else {
        alert(`Color: ${this.selectedColor} is taken. Please select another color!`);
      }
    });
  }

  registerTeam() {

    this.calculateTotals();

    if (this.teamName == null || this.teamName === '' ||
      this.phone == null || this.phone === '' ||
      this.email == null || this.email === '' ||
      this.selectedColor == null || this.selectedColor === '') {
      this.valid = false;
    }

    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].name == null || this.members[i].name === '' ||
        this.members[i].shirt_size == null || this.members[i].shirt_size === '') {
         this.valid = false;
      }
    }

    if (this.valid === true) {
      const teamOutput = {
        'name': this.teamName,
        'email': this.email,
        'phone': this.phone,
        'color': this.selectedColor,
        'league': this.type.toLowerCase(),
        'members': this.members,
        'price': this.paypalTotal
      };


      this.register.registerTeam(teamOutput).subscribe( data => {
        const hash = data.hash;
        this.router.navigateByUrl('/fundraiser/wiffle-ball/register/team/' + hash);
      });

    } else {
      alert('One or more fields is blank. Please fill in all fields.');
      this.valid = true;
    }

    return null;
  }

  calculateTotals() {

    if (this.type.toLowerCase() === 'competitive') {
      this.memberCount = this.members.length - 4;
      this.memberTotal = this.memberCount * 25;
      const transactionFee = ((125 + this.memberTotal) * .029 + .3);
      this.finalTotal = (125 + this.memberTotal).toFixed(2);
      this.paypalTotal = (125 + this.memberTotal + transactionFee).toFixed(2);
    } else {
      this.memberCount = this.members.length - 5;
      this.memberTotal = this.memberCount * 25;
      const transactionFee = ((125 + this.memberTotal) * .029 + .3);
      this.finalTotal = (125 + this.memberTotal).toFixed(2);
      this.paypalTotal = (125 + this.memberTotal + transactionFee).toFixed(2);
    }



  }





  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      if (this.type === 'Competitive') {
        this.members = [
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''}
        ];
      } else if (this.type === 'Friendly') {
        this.members = [
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''},
          {name: '', shirt_size: ''}
        ];
      } else {
        this.members = [

        ];
      }
      this.calculateTotals();
    }
  }

}

class Member {
  name = '';
  shirt_size = '';

  constructor() {
    this.name = '';
    this.shirt_size = '';
  }
}
