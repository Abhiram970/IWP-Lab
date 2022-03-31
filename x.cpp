#include<iostream>
using namespace std;
#include<vector>
#include<limits.h>
void matrix_chain_order(vector<int> p, vector<vector<int> >& m, vector<vector<int> >& s)
{
    int n;
    n = p.size()-1;

    for(int l = 2;l <=n ;l++)
    {
        for(int i = 1; i <= n-l+1 ;i++)
        {

            int j = i+l-1;

            m[i-1][j-1] = INT_MIN;

            for(int k=i; k<=j-1; k++)
            {

                int q = m[i-1][k-1] + m[k][j-1] + p[i-1]*p[k]*p[j];

                if(q > m[i-1][j-1])
                {
                    m[i-1][j-1] = q;
                    s[i-1][j-1] = k;
                }
            }
        }
    }
}
void print_Optimal_Parens(vector<vector<int> >& s, int i, int j)
{
    if(i==j)
        cout<<"A"<<i;
    else
    {
        cout<<"(";
        print_Optimal_Parens(s,i,s[i-1][j-1]);
        print_Optimal_Parens(s,s[i-1][j-1]+1,j);
        cout<<")";
    }
}
int main()
{    
    int n;
    cin>>n;
    //taking the input
    vector<int> p(n);
    for(int i=0;i<n;i++)
        cin>>p[i];
    // taking in the matrices
    vector<vector<int> > m(n-1,vector<int>(n-1,0));
    vector<vector<int> > s(n-1,vector<int>(n-1,0));
    matrix_chain_order(p,m,s);
    //M table
    for(int i=0;i<n-2;i++)
    {
        for(int j=1;j<n-1;j++)
            if (m[i][j] > 0)
            {
                cout<<m[i][j]<<" ";
            }
        cout<<endl;
    }
    // S table
    for(int i=0;i<n-2;i++)
    {
        for(int j=0;j<n-1;j++)
            if (s[i][j] > 0)
            {
                cout<<s[i][j]<<" ";
            }
        cout<<endl;
    }
    
    cout << m[0][n-2] <<endl;
    print_Optimal_Parens(s,1,n-1);
}