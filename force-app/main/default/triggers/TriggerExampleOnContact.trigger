trigger TriggerExampleOnContact on Contact (after insert) {

    if(trigger.isInsert && trigger.isAfter){
        String conId;
        for (Contact cdl : trigger.new) {
     		conId=cdl.id;
          //  futureCallOut.callRest(conId);
        }
    }  
        
}