import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  constructor(private http:HttpClient) { }
  readonly baseUrl='https://localhost:44383/api/Paydetals';
formData:PaymentDetail=new PaymentDetail();
list:PaymentDetail[];
postPaydetals()
{
 return this.http.post(this.baseUrl,this.formData)
}
getallPay()
{
  this.http.get(this.baseUrl).toPromise().then(res=>this.list=res as PaymentDetail[])
}
putPay()
{
  return this.http.put(this.baseUrl+'/'+this.formData.payId,this.formData)
}
deletePay(id:number)
{
 return this.http.delete(this.baseUrl+'/'+id)
}
}
