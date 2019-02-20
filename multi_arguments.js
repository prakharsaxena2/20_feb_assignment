function sum()
{
   var base=0;
   for(var i=1;i<arguments.length;i++)
   {
       base +=Number(arguments[i]);
   }

   return base;
}

sum(2,4,5,6,5,12);