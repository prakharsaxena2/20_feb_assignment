var datajunction=[
    {
        type:"A",
        percentage:5,
    },

    {
        type:"B",
        percentage:15,
    },
    {
        type:"C",
        percentage:55,
    },
    
    {
        type:"D",
        percentage:25,
    },
    
    {
        type:"E",
        percentage:50,
    },
    

]

function check(type,amount=0)
{

       var percent = 0;
       var net_amount;
       var Types="None";
       let Deduction_amt;

       for(let i=0;i<datajunction.length;i++)
       {
           if(datajunction[i].type==type)
           {
            percent = datajunction[i].percentage;
            Types = datajunction[i].type;
           }
       }

       Deduction_amt= (amount * percent) / 100;
       Net_amount = amount - Deduction_amt;
       var obj = {
           "Type": Types,
           "amount": amount,
           "Percentage": percent,
           "Deduction_amount": Deduction_amt,
           "Net amount": net_amount
       };
       return obj;
   
       



       
    }

check("D",100)
