import { Component, OnInit } from '@angular/core';
import { WiffleBallEventDetailsSubscribeDialogComponent } from '../wiffle-ball-event-details-subscribe-dialog/wiffle-ball-event-details-subscribe-dialog.component';
import {MatDialog} from "@angular/material";
import {Member, ShirtSize} from "../member.model";
import {League, Team} from "../team.model";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wiffle-ball-register',
  templateUrl: './wiffle-ball-register.component.html',
  styleUrls: ['./wiffle-ball-register.component.scss']
})
export class WiffleBallRegisterComponent implements OnInit {

  formType: string;

  team: Team;
  captain: Member;
  members: Member[] = [];

  minimumTeamMembers: number = 3;


  teamFormGroup: FormGroup;


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private teamService: TeamService,
    public fb: FormBuilder
  ) {

    this.team = new Team();
    this.team.league = League.COMPETITIVE;
    this.captain = {
        name: 'Bob',
        email: '',
        phone: '',
        shirtSize: ShirtSize.M,
        isCaptain: true
    } as Member;
  }

    openDialog(): void {
    const dialogRef = this.dialog.open(WiffleBallEventDetailsSubscribeDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    this.teamFormGroup = this.fb.group({
      name: ['Thundercats', Validators.required],
      shirtColor: ['M'],
      league: [League.COMPETITIVE],
      captain: this.fb.group({
        name: ['Jon', Validators.required],
        email: ['jon@gmail.com', [Validators.required, Validators.email]],
        phone: ['5756103327', Validators.required],
        shirtSize: ['L', Validators.required]
      }),
      members: this.constructMembersFormArray(3)
    });

    this.teamFormGroup.get('league').valueChanges.subscribe(league => {
      if (league == League.COMPETITIVE) {
        this.teamFormGroup.setControl('members', this.constructMembersFormArray(3));
        this.minimumTeamMembers = 3;
      } else {
        this.teamFormGroup.setControl('members', this.constructMembersFormArray(4));
        this.minimumTeamMembers = 4;
      }
    });

    this.teamFormGroup.valueChanges.subscribe(() => {
      this.team = this.getFormValues();
    })
  }

  getFormValues(): Team {
    const teamValues: any = this.teamFormGroup.value;
    const team: Team = new Team();

    const captain: Member = Object.assign({isCaptain: true}, teamValues.captain) as Member;

    const members: Member[] = teamValues.members.map((memberValue) => {
      return Object.assign({isCaptain: false}, memberValue) as Member;
    });

    team.name = teamValues.name;
    team.color = teamValues.shirtColor;
    team.league = teamValues.league;
    team.members = [captain, ...members];
    team.paid = false;

    const baseMembers = (teamValues.league === League.COMPETITIVE) ? 4 : 5;
    const baseFee = 100 + ((team.members.length % baseMembers) * 25);


    team.registrationFee = (baseFee * (1.029) +  .30).toString();

    return team;
  }

  constructMembersFormArray(amount: number): FormArray {
    const membersFormArray = this.fb.array([]);
    for(let i = 0; i < amount; i++) {
      membersFormArray.insert(i, this.fb.group({
        name: ['Bob', Validators.required],
        email: ['bob@gmail.com', [Validators.email]],
        shirtSize: ['M', Validators.required]
      }));
    }
    return membersFormArray;
  }

  addBlankMember(): void {
    this.membersFormArray.push(this.fb.group({name: [''], email: [''], shirtSize: ['']}));
  }

  removeMember(index: number): void {
    this.membersFormArray.removeAt(index);
  }

  submitTeam(): void {
    this.teamService.createTeam(this.getFormValues()).subscribe((returnedDocRef) => {
      this.router.navigate([`/fundraiser/wiffle-ball/team/${returnedDocRef.id}`]);
    }, (err => {
      console.log(err);
    }));
  }

  get membersFormArray(): FormArray {
    return this.teamFormGroup.get('members') as FormArray;
  }

  get captainFormGroup(): FormGroup {
    return this.teamFormGroup.get('captain') as FormGroup;
  }

}
