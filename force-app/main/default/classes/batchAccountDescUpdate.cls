global class batchAccountDescUpdate implements Database.Batchable<sObject> {

    global Database.QueryLocator start(Database.BatchableContext BC ) {
        String query = 'SELECT Id,name,description FROM Account';
        return Database.getQueryLocator(query);
    }
 
 //integer age 
 //Database.BatchableContext BC
   
    global void execute(Database.BatchableContext BC, List<Account> scope) {
         
    for(Account a : scope)
    {
    if(a.description == 'Not Available')
      a.description = 'Please fill details, else record will be made inactive!'; 
    }
   update scope;
   }
   
    
    global void finish(Database.BatchableContext BC) {
        //Code of sending email
  //Performing signature activity
  //For calling another batch class
  //Sending SMS
  //Sending stat of the processing using stateful
    }
}