import { LightningElement, wire, api } from 'lwc';
import addCandidate from '@salesforce/apex/NewCandidate.addCandidate';
import getCandidateList from '@salesforce/apex/NewCandidate.getCandidateList';
import {getRecord} from 'lightning/uiRecordApi';
const FIELDS =[
    'canditate__c.First_Name__c',
    'canditate__c.Last_Name__c',
    'canditate__c.Status__c'

];

export default class CandidateTracker extends LightningElement {
   // @api recordId;
    @wire(getCandidateList) candidateList;
   // @wire(getRecord, { recordId: '$recordId', fields: FIELDS  } ) candidate;
    get firstname(){
        return this.canditate__c.data.fields.First_Name__c.value;
    }
    selectedOption;
    candidateFirstName;
    candidateLastName;
    candidateExpectedSalary;
    candidateStatus;
    candidateCity;
    candidateCountry;
    techPlatform;
    candidateExp;
    candidateCountry;
    candidateContinent;
    

   /*@wire (addCandidate,{fName:'$candidateFirstName' ,
                        lName:'$candidateLastName' ,
                        expectedSal:'$candidateExpectedSalary' ,
                        status:'$candidateStatus' ,
                        city:'$candidateCity'}
    )*/
   
    
    newCandidateList =[];
    get skills(){
       
        return[
            {label: 'CRM', value : 'CRM'},
            {label: 'DIGITAL', value : 'DIGITAL'},
            {label: 'DOTNET', value : 'DOTNET'},
            {label: 'JAVA', value : 'JAVA'},
            {label: 'ORCALE', value : 'ORACLE'}
        ];
    }
    get countries(){
        return [
            {label: 'BRAZIL', value : 'BRAZIL'},
            {label: 'INDIA', value : 'INDIA'},
            {label: 'AUS', value : 'AUS'},
            {label: 'UK', value : 'UK'}
        ];

    }
    get continents(){
        return [
            {label: 'AFRICA', value : 'AFRICA'},
            {label: 'AUSTRALIA', value : 'AUSTRALIA'},
            {label: 'ASIA', value : 'ASIA'},
            {label: 'EUROPE', value : 'EUROPE'}
        ];

    }
    handleChange(event){
        if(event.target.name==='optionSelect')
        this.selectedOption=event.target.value;
        if(event.target.dataset.id==="candidateCity")
       
        this.candidateCity=event.target.value;
        
        if(event.target.dataset.id==="candidateStatus")
        this.candidateStatus=event.target.value;
        
        if(event.target.dataset.id==="candidateFName")
        this.candidateFirstName=event.target.value;
        
        if(event.target.dataset.id==="candidateLName")
        this.candidateLastName=event.target.value;
        
        if(event.target.dataset.id==="expectedSalary")
        this.candidateExpectedSalary=event.target.value;
        
        
        if(event.target.dataset.id==="candidateCountry")
        this.candidateCountry=event.target.value;
        if(event.target.dataset.id==="candidateContinent")
        this.candidateContinent=event.target.value;
        if(event.target.dataset.id==="techPlatform")
                this.techPlatform=event.target.value;
        if(event.target.dataset.id==="slider-id-01"){
                    console.log('Changed ' + event.target.value);
                this.candidateExp=event.target.value;
                }
}
    addCandidateHandler(){
        var inputBox = this.template.querySelectorAll("lightning-input");
        inputBox.forEach(
            function(element){
                
                //console.log('For Loop'+ element.dataset.id);
                if(element.dataset.id==="candidateFName")
                this.candidateFName=element.value;
        
                if(element.dataset.id==="candidateLName")
                this.candidateLName=element.value;

                if(element.dataset.id==="candidateCity")
                this.candidateCity=element.value;
                if(element.dataset.id==="candidateStatus")
                this.candidateStatus=element.value;
                if(element.dataset.id==="expectedSalary")
                this.expectedSalary=element.value;
                
                if(element.dataset.id==="slider-id-01"){
                    
                this.candidateExp=element.value;
                }
                

            },this
        );
       const  newCandidate={
            candidateFirstName:this.candidateFirstName,
            candidateLastName:this.candidateLastName,
            candidateExpectedSalary:this.candidateExpectedSalary,
            candidateStatus:this.candidateStatus,
            candidateCity:this.candidateCity,
            candidateCountry:this.candidateCountry,
            techPlatform:this.techPlatform,
            candidateExp:this.candidateExp,
            candidateCountry:this.candidateCountry,
            candidateContinent:this.candidateContinent
        };
        console.log('In Add Record ' + this.techPlatform,this.candidateCountry,this.candidateContinent);
       console.log('newcndi ' + JSON.stringify(newCandidate));
        this.newCandidateList.push(this.newCandidateList);
        console.log(this.newCandidateList);
        addCandidate({newCandidate:JSON.stringify(newCandidate)}
          /*  {fName:this.candidateFirstName ,
        lName:this.candidateLastName ,
        expectedSal:this.candidateExpectedSalary ,
        status:this.candidateStatus ,
        city:this.candidateCity,
        Experience: this.candidateExp,
        techplatform: this.techPlatform,
        country:this.candidateCountry,
        continent:this.candidateContinent}*/
        )
        .then(result =>{
            console.log('Update from apex ' +result);
        })
        .catch(error=>{
            console.error('Error in insert' + JSON.stringify(error));
        });
    }

}
