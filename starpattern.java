/////////////////////////////
/*class:starpattern
 *Input:--
 *Output:
 *  *  *  * 
 *  *  * 
 *  * 
 * 
 *Description:Printing of star pattern
 *Date:28-July-2021
 *Author Name:Shruti Nahar
 *///////////////////////////////
package practiceset4;

public class starpattern {
	
	    public static void main(String[] args) {
	        // Practice Problem 1
	        int n = 4;
              for (int i=0;i<n;i++)
              {
                for(int j=n;j>i; j--)
               {
            	   System.out.print(" * ");
               }
	            System.out.print("\n");
	        }

	    }
}
	

