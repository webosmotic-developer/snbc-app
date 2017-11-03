import {Component} from '@angular/core';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public iSlotID: string;
  public iCabinetID: string;
  public cabinetArr: any;
  public slotArr: any;

  constructor() {
    this.cabinetArr = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
    this.slotArr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
      '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
    this.iCabinetID = '00';
    this.iSlotID = '01';
  }

  /**
   * Open Locker Slot
   * */
  fnOpenSlot() {
    cordova.plugins.snbc.openSlot(
      this.iSlotID, this.iCabinetID,
      (status) => {
        alert('SUCCESS : <' + this.iCabinetID + ',' + this.iSlotID + '>' + status);
      },
      (err) => {
        alert('ERROR : <' + this.iCabinetID + ',' + this.iSlotID + '>' + err);
      }
    );
  }

  /**
   * Check slot status
   * */
  fnGetSlotStatus() {
    cordova.plugins.snbc.getLockerStatus(
      this.iSlotID, this.iCabinetID,
      (status) => {
        alert('SUCCESS : <' + this.iCabinetID + ',' + this.iSlotID + '>' + status);
      },
      (err) => {
        alert('ERROR : <' + this.iCabinetID + ',' + this.iSlotID + '>' + err);
      }
    );
  }
}
