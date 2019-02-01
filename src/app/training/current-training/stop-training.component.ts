import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component ({
    selector: 'app-stop-training',
    template: `
        <h1 mat-dialog-title>Etes-vous sur ?</h1>
        <mat-dialog-content>
            <p>Vous êtes à {{passedData.progress}}%</p>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Oui</button>
            <button mat-button [mat-dialog-close]="false">Non</button>
        </mat-dialog-actions>
    `
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any){}
}