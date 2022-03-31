#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    printf("Enter n : ");
    scanf("%d",&n);
    int* arr[n];
    for (int i = 0; i < n; i++)
        arr[i] = (int*)malloc(n * sizeof(int));

    for (int i = 0 ; i < n ; i++)
    {
        for (int j = 0 ; j < n ;j++)
        {
            scanf("%d",&arr[i][j]);
        }    
    }

    int diag1 = 0,diag2 = 0,lowtri = 0,uptri = 0;

    for (int i = 0 ; i < n ; i++)
    {
        for (int j = 0 ; j < n ;j++)
        {
            if (i == j)
            {
                diag2 += arr[i][j];
            }
            if (i < j || i == j)
            {
                lowtri += arr[i][j];
            }
            if (i > j || i == j)
            {
                uptri += arr[i][j];
            }
        }   
    }


    for(int i=0, j=2; i<3 ;i++,j--)
    {
        diag1 +=arr[i][j];
    }
    
    printf("%d %d %d %d",diag1,diag2,lowtri,uptri);
}