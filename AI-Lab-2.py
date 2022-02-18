import random

flag = False

def display(room):
    print(room)

room = [
    ['x', 0,0, 'x'],
    [0, 0,'x', 0],
    [0, 0,'x', 0],
    ['x', 0,0, 0],
]

for i in range(len(room)):
    for j in range(len(room)):
        if (room[i][j]) == 'x':
            print("Room is dirty")
        break
    break

print("\nCurrent status of the room")
display(room)

x =0
y= 0

while x < 4:
    while y < 4:
        y+=1
    x+=1
    y=0

print("\nBefore cleaning the room detecting all of these random dirts")
display(room)
print()

x =0
y= 0
z=0

while x < len(room):
    while y < len(room):
        if room[x][y] == 'x':
            print("Vaccum in this location now,",x, y)
            room[x][y] = 0
            print("cleaned", x, y)
            z+=1
        y+=1
    x+=1
    y=0
    flag = True



pro = (100-((z/16)*100))
print()
print("Room is clean now, Thanks for using smart vaccum")
display(room)

if flag :
    print("\nVaccum is now at (0,0) home")

print('performance =',pro,'%')