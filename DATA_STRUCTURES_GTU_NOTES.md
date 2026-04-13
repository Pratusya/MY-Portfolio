# Data Structures - GTU Study Notes
## 3rd Semester | Subject: Data Structures (BE03000081)

---

# UNIT 01: INTRODUCTION TO DATA STRUCTURE (CO 1)

---

## Q1. Discuss various types of data structures with example. OR Define primitive and non-primitive data types with example.
**(GTU: W23, S24, S25) [4-7 Marks]**

### Answer:

### Data Structure Definition:
A **data structure** is a way of organizing, storing, and managing data in a computer so that it can be accessed and modified efficiently.

### Classification of Data Structures:

Primitive data types include: int, char, float, bool
Non-Primitive data types include: Linear (Array, Stack, Queue, Linked List) and Non-Linear (Trees, Graphs)

### 1. Primitive Data Structures:
These are basic data types that are directly operated upon by machine-level instructions.

| Data Type | Description | Example |
|-----------|-------------|---------|
| Integer | Whole numbers | int age = 25 |
| Float | Decimal numbers | float pi = 3.14 |
| Character | Single character | char grade = 'A' |
| Boolean | True/False values | bool flag = true |

### 2. Non-Primitive Data Structures:

#### Linear Data Structures:
- Array: Fixed-size collection of same type elements
- Stack: LIFO (Last In First Out)
- Queue: FIFO (First In First Out)
- Linked List: Dynamic collection with pointers

#### Non-Linear Data Structures:
- Tree: Hierarchical structure
- Graph: Network of nodes and edges

### Difference between Primitive and Non-Primitive:

| Aspect | Primitive | Non-Primitive |
|--------|-----------|---------------|
| Definition | Basic data types | Derived from primitive |
| Storage | Stores single value | Stores multiple values |
| Size | Fixed size | Variable size |
| Examples | int, float, char | Array, Stack, Tree |

---

## Q2. Define Data Structure and differentiate between linear and nonlinear data structures.
**(GTU: W24, S25, W23) [4-7 Marks]**

### Answer:

### Definition of Data Structure:
A **Data Structure** is a specialized format for organizing, processing, retrieving, and storing data.

### Linear Data Structures:
Data elements arranged in **sequential manner** where each element is connected to its previous and next element.

**Characteristics:**
- Elements arranged in linear sequence
- Single level of organization
- Can be traversed in single run

**Examples:** Array, Stack, Queue, Linked List

### Non-Linear Data Structures:
Data elements **not arranged sequentially**. One element can be connected to multiple elements.

**Characteristics:**
- Elements arranged hierarchically
- Multiple levels of organization
- Cannot be traversed in single run

**Examples:** Tree, Graph

### Difference between Linear and Non-Linear Data Structures:

| Parameter | Linear | Non-Linear |
|-----------|--------|------------|
| Arrangement | Sequential | Hierarchical |
| Levels | Single level | Multiple levels |
| Traversal | Single run | Multiple runs |
| Implementation | Easy | Complex |
| Memory Usage | Less efficient | More efficient |
| Examples | Array, Stack, Queue | Tree, Graph |
| Relationship | One-to-one | One-to-many |

---

## Q3. What is time and space analysis? State and explain time analysis for linear search and binary search method.
**(GTU: W22, S22, S24, S25) [7 Marks]**

### Answer:

### Time Analysis:
**Time Complexity** measures the number of operations performed by an algorithm as a function of input size.

### Space Analysis:
**Space Complexity** measures the memory space required by an algorithm as a function of input size.

### Time Analysis for Linear Search:

**Algorithm:**
```
for i = 0 to n-1:
    if A[i] == key:
        return i
return -1
```

| Case | Time Complexity |
|------|-----------------|
| Best Case | O(1) |
| Worst Case | O(n) |
| Average Case | O(n) |

### Time Analysis for Binary Search:

**Pre-requisite:** Array must be sorted.

**Algorithm:**
```
low = 0, high = n-1
while (low <= high):
    mid = (low + high) / 2
    if A[mid] == key: return mid
    else if A[mid] < key: low = mid + 1
    else: high = mid - 1
return -1
```

| Case | Time Complexity |
|------|-----------------|
| Best Case | O(1) |
| Worst Case | O(log n) |
| Average Case | O(log n) |

### Comparison:

| Parameter | Linear Search | Binary Search |
|-----------|--------------|---------------|
| Prerequisite | None | Sorted array |
| Best Case | O(1) | O(1) |
| Worst Case | O(n) | O(log n) |
| Approach | Sequential | Divide & Conquer |

---

## Q4. Explain Asymptotic Notations in detail. Explain average case timing analysis for Search Algorithm.
**(GTU: S23, W24, S25) [7 Marks]**

### Answer:

### Asymptotic Notations:
Mathematical tools used to describe the running time of an algorithm when the input tends towards infinity.

### Three Types:

#### 1. Big-O Notation (O) - Upper Bound:
- Represents the **worst-case** scenario
- f(n) = O(g(n)) if f(n) <= c*g(n) for all n >= n0

#### 2. Ω (Omega) Notation - Lower Bound:
- Represents the **best-case** scenario
- f(n) = Ω(g(n)) if f(n) >= c*g(n) for all n >= n0

#### 3. Θ (Theta) Notation - Tight Bound:
- Represents the **average-case** scenario
- f(n) = Θ(g(n)) if c1*g(n) <= f(n) <= c2*g(n) for all n >= n0

### Common Time Complexities:

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n^2) | Quadratic | Bubble sort |

### Growth Rate:
O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

### Average Case Analysis:

#### Linear Search:
A(n) = (1+2+3+...+n)/n = (n+1)/2 = **O(n)**

#### Binary Search:
A(n) = log n - 1 = **O(log n)**

---

# UNIT 02: LINEAR DATA STRUCTURE (CO 2)

---

## Q5. State at least one efficient representation of a sparse matrix.
**(GTU: W23, S24, W24) [3-4 Marks]**

### Answer:

### Sparse Matrix:
A matrix is called **sparse** when the number of non-zero elements is very less compared to total elements. Typically, when more than 50% elements are zero.

### Efficient Representations:

#### 1. Triplet Representation (Array Representation):
Store only non-zero elements with their row, column, and value.

**Structure:**
| Row | Column | Value |
|-----|--------|-------|

**Example:**
Original 4x4 matrix:
```
0 0 3 0
0 0 5 7
0 0 0 0
0 2 6 0
```

Triplet representation:
| Row | Col | Value |
|-----|-----|-------|
| 4 | 4 | 5 |
| 0 | 2 | 3 |
| 1 | 2 | 5 |
| 1 | 3 | 7 |
| 3 | 1 | 2 |
| 3 | 2 | 6 |

First row stores: Total Rows, Total Columns, Total Non-zero elements

**Advantages:**
- Memory efficient
- Easy to implement
- Fast access to individual elements

#### 2. Linked List Representation:
Each non-zero element is stored as a node with row, column, value, and pointers.

---

## Q6. What is stack? Write algorithms for PUSH and POP stack operations. Enlist applications of stack.
**(GTU: S25, W23, S22) [7 Marks]**

### Answer:

### Stack Definition:
A **Stack** is a linear data structure that follows **LIFO (Last In First Out)** principle. The element inserted last is the first one to be removed.

### Basic Operations:
- **PUSH:** Insert element at top
- **POP:** Remove element from top
- **PEEK/TOP:** View top element without removing
- **isEmpty:** Check if stack is empty
- **isFull:** Check if stack is full

### Algorithm for PUSH Operation:

```
Algorithm PUSH(STACK, TOP, MAX, ITEM)
Step 1: IF TOP = MAX-1 THEN
            Print "OVERFLOW"
            Return
        END IF
Step 2: TOP = TOP + 1
Step 3: STACK[TOP] = ITEM
Step 4: Return
```

### Algorithm for POP Operation:

```
Algorithm POP(STACK, TOP)
Step 1: IF TOP = -1 THEN
            Print "UNDERFLOW"
            Return NULL
        END IF
Step 2: ITEM = STACK[TOP]
Step 3: TOP = TOP - 1
Step 4: Return ITEM
```

### Stack Visualization:
```
PUSH(10) -> PUSH(20) -> PUSH(30) -> POP()

  |30| <- TOP      |  | 
  |20|             |20| <- TOP
  |10|             |10|
  ----             ----
```

### Applications of Stack:
1. **Expression Evaluation:** Infix to Postfix conversion
2. **Expression Conversion:** Infix to Prefix
3. **Parenthesis Matching:** Checking balanced brackets
4. **Function Calls:** Runtime stack for recursion
5. **Undo Operation:** In text editors
6. **Browser History:** Back button functionality
7. **Backtracking:** Maze solving, N-Queens problem
8. **Memory Management:** Call stack in programming

---

## Q7. Convert Infix Expression A ^ B * C - D + E / F / (G + H) into Postfix expression using stack.
**(GTU: W24, S25, W22) [7 Marks]**

### Answer:

### Infix Expression: A ^ B * C - D + E / F / (G + H)

### Operator Precedence:
| Operator | Precedence | Associativity |
|----------|------------|---------------|
| ^ | 3 | Right to Left |
| *, / | 2 | Left to Right |
| +, - | 1 | Left to Right |

### Conversion Process:

| Symbol | Stack | Postfix Expression |
|--------|-------|-------------------|
| A | | A |
| ^ | ^ | A |
| B | ^ | AB |
| * | * | AB^ |
| C | * | AB^C |
| - | - | AB^C* |
| D | - | AB^C*D |
| + | + | AB^C*D- |
| E | + | AB^C*D-E |
| / | +/ | AB^C*D-E |
| F | +/ | AB^C*D-EF |
| / | +/ | AB^C*D-EF/ |
| ( | +/( | AB^C*D-EF/ |
| G | +/( | AB^C*D-EF/G |
| + | +/(+ | AB^C*D-EF/G |
| H | +/(+ | AB^C*D-EF/GH |
| ) | +/ | AB^C*D-EF/GH+ |
| End | | AB^C*D-EF/GH+/+ |

### Final Postfix Expression: **AB^C*D-EF/GH+/+**

### Algorithm for Infix to Postfix:
```
1. Scan expression from left to right
2. If operand, add to output
3. If (, push to stack
4. If ), pop and output until ( is found
5. If operator:
   - Pop operators with higher or equal precedence
   - Push current operator
6. Pop remaining operators from stack
```

---

## Q8. Differentiate: Static and Dynamic Memory Allocation. Also discuss advantages of dynamic over static memory allocation.
**(GTU: S22, W23, W22, S24) [7 Marks]**

### Answer:

### Static Memory Allocation:
Memory is allocated at **compile time**. The size of memory is fixed and cannot be changed during runtime.

**Example:**
```c
int arr[100];  // Fixed size array
int x = 10;    // Static variable
```

### Dynamic Memory Allocation:
Memory is allocated at **runtime**. The size can be modified during program execution.

**Example:**
```c
int *ptr = (int*) malloc(n * sizeof(int));  // C
int *ptr = new int[n];                       // C++
```

### Difference Table:

| Parameter | Static Allocation | Dynamic Allocation |
|-----------|------------------|-------------------|
| **Time** | Compile time | Runtime |
| **Size** | Fixed, cannot change | Can be modified |
| **Memory Area** | Stack | Heap |
| **Efficiency** | Faster | Slower |
| **Flexibility** | Less flexible | More flexible |
| **Memory Waste** | May waste memory | No wastage |
| **Functions** | Not required | malloc, calloc, free |
| **Lifetime** | Entire program | Can be freed anytime |

### Advantages of Dynamic over Static:

1. **Memory Efficiency:**
   - Allocate exact memory needed
   - No wastage of memory

2. **Flexibility:**
   - Size can be changed at runtime
   - Grow or shrink as needed

3. **Data Structure Support:**
   - Linked Lists, Trees, Graphs
   - Cannot be implemented with static allocation

4. **No Size Limitation:**
   - Not limited by stack size
   - Can allocate large memory blocks

5. **Better Resource Utilization:**
   - Memory can be freed when not needed
   - Reusable memory

6. **Variable Length Arrays:**
   - User input determines size
   - Truly dynamic programs

### Functions for Dynamic Memory:
| Function | Description |
|----------|-------------|
| malloc() | Allocates uninitialized memory |
| calloc() | Allocates initialized memory |
| realloc() | Resizes allocated memory |
| free() | Deallocates memory |

---

## Q9. Consider the stack S of characters, where S is allocated 8 memory cells. Describe the stack operations.
**(GTU: S23, W23, W24) [4-7 Marks]**

### Answer:

### Initial Stack S: A, C, D, F, K, _, _, _
TOP = 4 (pointing to K)

### Operations Sequence:
Pop(), Pop(), Push(L), Push(P), Pop(), Push(R), Push(S), Pop()

### Step-by-Step Execution:

| Operation | Stack Contents | TOP | Returned Value |
|-----------|---------------|-----|----------------|
| Initial | A C D F K _ _ _ | 4 | - |
| Pop() | A C D F _ _ _ _ | 3 | K |
| Pop() | A C D _ _ _ _ _ | 2 | F |
| Push(L) | A C D L _ _ _ _ | 3 | - |
| Push(P) | A C D L P _ _ _ | 4 | - |
| Pop() | A C D L _ _ _ _ | 3 | P |
| Push(R) | A C D L R _ _ _ | 4 | - |
| Push(S) | A C D L R S _ _ | 5 | - |
| Pop() | A C D L R _ _ _ | 4 | S |

### Final Stack: A, C, D, L, R, _, _, _
### Final TOP = 4

### Visual Representation:
```
Initial:     After Pop(), Pop():     Final:
|_| 7        |_| 7                   |_| 7
|_| 6        |_| 6                   |_| 6
|_| 5        |_| 5                   |_| 5
|K| 4 <-TOP  |_| 4                   |R| 4 <-TOP
|F| 3        |_| 3                   |L| 3
|D| 2        |D| 2 <-TOP             |D| 2
|C| 1        |C| 1                   |C| 1
|A| 0        |A| 0                   |A| 0
```

---

## Q10. What is queue? Explain operations on queue in detail. Explain advantages of circular queue over Simple queue.
**(GTU: W24, S23, W23) [7 Marks]**

### Answer:

### Queue Definition:
A **Queue** is a linear data structure that follows **FIFO (First In First Out)** principle. The element inserted first is the first one to be removed.

### Queue Operations:

#### 1. ENQUEUE (Insertion):
```
Algorithm ENQUEUE(QUEUE, REAR, MAX, ITEM)
Step 1: IF REAR = MAX-1 THEN
            Print "OVERFLOW"
            Return
        END IF
Step 2: REAR = REAR + 1
Step 3: QUEUE[REAR] = ITEM
Step 4: IF FRONT = -1 THEN
            FRONT = 0
        END IF
Step 5: Return
```

#### 2. DEQUEUE (Deletion):
```
Algorithm DEQUEUE(QUEUE, FRONT, REAR)
Step 1: IF FRONT = -1 OR FRONT > REAR THEN
            Print "UNDERFLOW"
            Return NULL
        END IF
Step 2: ITEM = QUEUE[FRONT]
Step 3: FRONT = FRONT + 1
Step 4: Return ITEM
```

### Simple Queue Visualization:
```
FRONT                    REAR
  |                       |
  v                       v
| 10 | 20 | 30 | 40 | 50 |
```

### Advantages of Circular Queue over Simple Queue:

| Aspect | Simple Queue | Circular Queue |
|--------|-------------|----------------|
| Memory Utilization | Poor - deleted spaces wasted | Efficient - reuses deleted spaces |
| Overflow Condition | REAR = MAX-1 | (REAR+1) % MAX = FRONT |
| Space Reuse | Not possible | Possible |
| Implementation | Simpler | Slightly complex |

### Why Circular Queue is Better:
1. **No Memory Wastage:** Deleted positions can be reused
2. **Efficient:** Better memory utilization
3. **Continuous:** No need to shift elements
4. **Practical:** Used in CPU scheduling, Buffering

---

## Q11. Explain Dequeue and Priority queue in detail.
**(GTU: W23, S24, S25, W24) [7 Marks]**

### Answer:

### Dequeue (Double-Ended Queue):
A **Dequeue** is a generalized queue where insertion and deletion can be performed at **both ends** (front and rear).

### Types of Dequeue:
1. **Input Restricted Dequeue:** Insertion only at rear, deletion at both ends
2. **Output Restricted Dequeue:** Deletion only at front, insertion at both ends

### Dequeue Operations:
- InsertFront(): Add at front
- InsertRear(): Add at rear
- DeleteFront(): Remove from front
- DeleteRear(): Remove from rear

### Dequeue Visualization:
```
     DeleteFront    InsertFront
          |              |
          v              v
    FRONT                         REAR
      |                             |
      v                             v
    | 10 | 20 | 30 | 40 | 50 |
      ^                             ^
      |                             |
    DeleteRear                InsertRear
```

### Priority Queue:
A **Priority Queue** is a special queue where each element has a **priority** associated with it. Elements are served based on their priority, not arrival order.

### Types:
1. **Ascending Priority Queue:** Smallest priority served first
2. **Descending Priority Queue:** Highest priority served first

### Priority Queue Operations:
```
Insert(item, priority): Add with priority
Delete(): Remove highest priority item
Peek(): View highest priority item
```

### Example:
| Element | Priority |
|---------|----------|
| A | 3 |
| B | 1 |
| C | 2 |

**Descending PQ Order:** A (3) -> C (2) -> B (1)

### Applications:
- **Dequeue:** Palindrome checking, Undo-Redo operations
- **Priority Queue:** CPU scheduling, Dijkstras algorithm, Huffman coding

---

## Q12. What is Circular queue? Explain operations on circular queue in detail.
**(GTU: W23, S24, S25) [7 Marks]**

### Answer:

### Circular Queue Definition:
A **Circular Queue** is a linear data structure where the last position is connected back to the first position, forming a circle. It overcomes the limitation of simple queue.

### Why Circular Queue?
In simple queue, after multiple dequeue operations, front positions become unusable even if empty. Circular queue reuses these positions.

### Circular Queue Operations:

#### 1. INSERT (Enqueue):
```
Algorithm INSERT(CQ, FRONT, REAR, MAX, ITEM)
Step 1: IF (REAR+1) % MAX = FRONT THEN
            Print "OVERFLOW"
            Return
        END IF
Step 2: IF FRONT = -1 THEN
            FRONT = 0
            REAR = 0
        ELSE
            REAR = (REAR + 1) % MAX
        END IF
Step 3: CQ[REAR] = ITEM
Step 4: Return
```

#### 2. DELETE (Dequeue):
```
Algorithm DELETE(CQ, FRONT, REAR, MAX)
Step 1: IF FRONT = -1 THEN
            Print "UNDERFLOW"
            Return NULL
        END IF
Step 2: ITEM = CQ[FRONT]
Step 3: IF FRONT = REAR THEN
            FRONT = -1
            REAR = -1
        ELSE
            FRONT = (FRONT + 1) % MAX
        END IF
Step 4: Return ITEM
```

### Circular Queue Visualization:
```
        [0]
       /   \
    [4]     [1]
      \     /
    [3]--[2]
    
FRONT = 1, REAR = 4
Elements: [1]=A, [2]=B, [3]=C, [4]=D
```

### Key Formulas:
- **Next position:** (current + 1) % MAX
- **Full condition:** (REAR + 1) % MAX == FRONT
- **Empty condition:** FRONT == -1

---

## Q13. Circular queue operations with size 4.
**(GTU: W24, S25, W23) [7 Marks]**

### Answer:

### Circular Queue Size: 4 (indices 0-3)
### Initial: FRONT = -1, REAR = -1

### Operations:
Insert A | Insert B | Insert C | Delete A | Delete B | Insert D | Insert E

### Step-by-Step:

| Operation | Queue State | FRONT | REAR | Comment |
|-----------|-------------|-------|------|---------|
| Initial | [ _ _ _ _ ] | -1 | -1 | Empty |
| Insert A | [ A _ _ _ ] | 0 | 0 | First element |
| Insert B | [ A B _ _ ] | 0 | 1 | Added at rear |
| Insert C | [ A B C _ ] | 0 | 2 | Added at rear |
| Delete A | [ _ B C _ ] | 1 | 2 | A removed |
| Delete B | [ _ _ C _ ] | 2 | 2 | B removed |
| Insert D | [ _ _ C D ] | 2 | 3 | Added at rear |
| Insert E | [ E _ C D ] | 2 | 0 | Circular wrap! |

### Visual After Each Operation:

```
Initial:         Insert A:        Insert B:
[_][_][_][_]    [A][_][_][_]    [A][B][_][_]
F=-1 R=-1       F=0 R=0         F=0 R=1

Insert C:        Delete A:        Delete B:
[A][B][C][_]    [_][B][C][_]    [_][_][C][_]
F=0 R=2         F=1 R=2         F=2 R=2

Insert D:        Insert E:
[_][_][C][D]    [E][_][C][D]
F=2 R=3         F=2 R=0 (wrapped)
```

### Final State:
- Queue: [E, _, C, D]
- FRONT = 2, REAR = 0
- Elements in order: C, D, E

---

## Q14. Write an algorithm for insertion of node at First and last position in Linear Linked List.
**(GTU: W22, S22, S24, S25) [7 Marks]**

### Answer:

### Node Structure:
```c
struct Node {
    int data;
    struct Node *next;
};
```

### Algorithm: Insert at First Position

```
Algorithm INSERT_FIRST(HEAD, ITEM)
Step 1: Create new node NEWNODE
Step 2: NEWNODE->data = ITEM
Step 3: NEWNODE->next = HEAD
Step 4: HEAD = NEWNODE
Step 5: Return HEAD
```

### Visualization - Insert at First:
```
Before: HEAD -> [10] -> [20] -> [30] -> NULL
Insert 5 at first:
After:  HEAD -> [5] -> [10] -> [20] -> [30] -> NULL
```

### Algorithm: Insert at Last Position

```
Algorithm INSERT_LAST(HEAD, ITEM)
Step 1: Create new node NEWNODE
Step 2: NEWNODE->data = ITEM
Step 3: NEWNODE->next = NULL
Step 4: IF HEAD = NULL THEN
            HEAD = NEWNODE
            Return HEAD
        END IF
Step 5: TEMP = HEAD
Step 6: WHILE TEMP->next != NULL DO
            TEMP = TEMP->next
        END WHILE
Step 7: TEMP->next = NEWNODE
Step 8: Return HEAD
```

### Visualization - Insert at Last:
```
Before: HEAD -> [10] -> [20] -> [30] -> NULL
Insert 40 at last:
After:  HEAD -> [10] -> [20] -> [30] -> [40] -> NULL
```

### Time Complexity:
| Operation | Time |
|-----------|------|
| Insert at First | O(1) |
| Insert at Last | O(n) |

---

## Q15. What is recursion? Explain Tower of Hanoi with example. Also write recursive algorithm to compute factorial.
**(GTU: W23, S24, W24) [7 Marks]**

### Answer:

### Recursion Definition:
**Recursion** is a programming technique where a function calls itself to solve smaller instances of the same problem until it reaches a base case.

### Components of Recursion:
1. **Base Case:** Terminating condition
2. **Recursive Case:** Function calling itself

### Factorial - Recursive Algorithm:

```
Algorithm FACTORIAL(n)
Step 1: IF n = 0 OR n = 1 THEN
            Return 1        // Base case
        END IF
Step 2: Return n * FACTORIAL(n-1)  // Recursive case
```

### Example: FACTORIAL(5)
```
FACTORIAL(5) = 5 * FACTORIAL(4)
             = 5 * 4 * FACTORIAL(3)
             = 5 * 4 * 3 * FACTORIAL(2)
             = 5 * 4 * 3 * 2 * FACTORIAL(1)
             = 5 * 4 * 3 * 2 * 1
             = 120
```

### Tower of Hanoi:

**Problem:** Move n disks from Source (A) to Destination (C) using Auxiliary (B) peg.

**Rules:**
1. Only one disk can be moved at a time
2. A larger disk cannot be placed on smaller disk
3. Only top disk can be moved

### Algorithm:
```
Algorithm TOH(n, source, auxiliary, destination)
Step 1: IF n = 1 THEN
            Print "Move disk 1 from source to destination"
            Return
        END IF
Step 2: TOH(n-1, source, destination, auxiliary)
Step 3: Print "Move disk n from source to destination"
Step 4: TOH(n-1, auxiliary, source, destination)
```

### Example: TOH(3, A, B, C)

| Step | Move | A | B | C |
|------|------|---|---|---|
| 0 | Initial | 1,2,3 | - | - |
| 1 | Disk 1: A->C | 2,3 | - | 1 |
| 2 | Disk 2: A->B | 3 | 2 | 1 |
| 3 | Disk 1: C->B | 3 | 1,2 | - |
| 4 | Disk 3: A->C | - | 1,2 | 3 |
| 5 | Disk 1: B->A | 1 | 2 | 3 |
| 6 | Disk 2: B->C | 1 | - | 2,3 |
| 7 | Disk 1: A->C | - | - | 1,2,3 |

**Total Moves:** 2^n - 1 = 2^3 - 1 = 7 moves

---

## Q16. What is linked list? What is header node in linked list? Explain types of linked list in detail.
**(GTU: S25, W23, S22) [7 Marks]**

### Answer:

### Linked List Definition:
A **Linked List** is a linear data structure where elements are stored in nodes, and each node contains data and a pointer/reference to the next node.

### Node Structure:
```c
struct Node {
    int data;
    struct Node *next;
};
```

### Header Node:
A **Header Node** is a special node placed at the beginning of the linked list that does not contain actual data. It contains metadata or simply acts as a starting point.

**Benefits:**
- Simplifies insertion/deletion at beginning
- Can store list metadata (count, etc.)
- Provides uniform handling of operations

### Types of Linked List:

#### 1. Singly Linked List:
Each node has data and pointer to next node only.

```
HEAD -> [10|*] -> [20|*] -> [30|*] -> NULL
```

**Characteristics:**
- Traversal in one direction only
- Simple implementation
- Less memory per node

#### 2. Doubly Linked List:
Each node has data, pointer to next and previous nodes.

```
NULL <- [*|10|*] <-> [*|20|*] <-> [*|30|*] -> NULL
```

**Characteristics:**
- Traversal in both directions
- Easy deletion of node
- More memory per node

#### 3. Circular Linked List:
Last node points back to first node (no NULL).

```
HEAD -> [10|*] -> [20|*] -> [30|*] --+
         ^                           |
         +---------------------------+
```

**Characteristics:**
- No NULL pointer
- Any node can be starting point
- Used in round-robin scheduling

#### 4. Circular Doubly Linked List:
Doubly linked list where last node connects to first and first to last.

```
+-> [*|10|*] <-> [*|20|*] <-> [*|30|*] <-+
|                                        |
+----------------------------------------+
```

### Comparison:

| Type | Memory | Traversal | Deletion |
|------|--------|-----------|----------|
| Singly | Less | Forward only | Needs predecessor |
| Doubly | More | Both ways | Easy |
| Circular | Same as singly | Continuous | No end |

---

## Q17. Write algorithm for inserting an element in circular linked list and deleting a node from a singly linked list.
**(GTU: W24, S25, W22) [7 Marks]**

### Answer:

### Algorithm: Insert in Circular Linked List (at end)

```
Algorithm INSERT_CIRCULAR(LAST, ITEM)
Step 1: Create new node NEWNODE
Step 2: NEWNODE->data = ITEM
Step 3: IF LAST = NULL THEN
            NEWNODE->next = NEWNODE
            LAST = NEWNODE
        ELSE
            NEWNODE->next = LAST->next
            LAST->next = NEWNODE
            LAST = NEWNODE
        END IF
Step 4: Return LAST
```

### Visualization - Circular Insert:
```
Before: LAST -> [30] -> [10] -> [20] -> (back to 10)
Insert 40:
After:  LAST -> [40] -> [10] -> [20] -> [30] -> (back to 10)
```

### Algorithm: Delete from Singly Linked List

```
Algorithm DELETE_NODE(HEAD, KEY)
Step 1: IF HEAD = NULL THEN
            Print "List is empty"
            Return HEAD
        END IF
Step 2: IF HEAD->data = KEY THEN
            TEMP = HEAD
            HEAD = HEAD->next
            Free(TEMP)
            Return HEAD
        END IF
Step 3: CURRENT = HEAD
Step 4: WHILE CURRENT->next != NULL AND 
              CURRENT->next->data != KEY DO
            CURRENT = CURRENT->next
        END WHILE
Step 5: IF CURRENT->next = NULL THEN
            Print "Key not found"
        ELSE
            TEMP = CURRENT->next
            CURRENT->next = TEMP->next
            Free(TEMP)
        END IF
Step 6: Return HEAD
```

### Visualization - Delete:
```
Before: HEAD -> [10] -> [20] -> [30] -> [40] -> NULL
Delete 30:
After:  HEAD -> [10] -> [20] -> [40] -> NULL
```

---

## Q18. Write an algorithm for insertion of a node in Doubly Linked List.
**(GTU: W24, S25, W22) [7 Marks]**

### Answer:

### Doubly Linked List Node Structure:
```c
struct Node {
    struct Node *prev;
    int data;
    struct Node *next;
};
```

### Algorithm: Insert at Beginning

```
Algorithm INSERT_BEGINNING(HEAD, ITEM)
Step 1: Create new node NEWNODE
Step 2: NEWNODE->data = ITEM
Step 3: NEWNODE->prev = NULL
Step 4: NEWNODE->next = HEAD
Step 5: IF HEAD != NULL THEN
            HEAD->prev = NEWNODE
        END IF
Step 6: HEAD = NEWNODE
Step 7: Return HEAD
```

### Algorithm: Insert at End

```
Algorithm INSERT_END(HEAD, ITEM)
Step 1: Create new node NEWNODE
Step 2: NEWNODE->data = ITEM
Step 3: NEWNODE->next = NULL
Step 4: IF HEAD = NULL THEN
            NEWNODE->prev = NULL
            HEAD = NEWNODE
            Return HEAD
        END IF
Step 5: TEMP = HEAD
Step 6: WHILE TEMP->next != NULL DO
            TEMP = TEMP->next
        END WHILE
Step 7: TEMP->next = NEWNODE
Step 8: NEWNODE->prev = TEMP
Step 9: Return HEAD
```

### Algorithm: Insert After a Node

```
Algorithm INSERT_AFTER(PREV_NODE, ITEM)
Step 1: IF PREV_NODE = NULL THEN
            Print "Previous node cannot be NULL"
            Return
        END IF
Step 2: Create new node NEWNODE
Step 3: NEWNODE->data = ITEM
Step 4: NEWNODE->next = PREV_NODE->next
Step 5: PREV_NODE->next = NEWNODE
Step 6: NEWNODE->prev = PREV_NODE
Step 7: IF NEWNODE->next != NULL THEN
            NEWNODE->next->prev = NEWNODE
        END IF
```

### Visualization:
```
Before: NULL <-> [10] <-> [20] <-> [30] <-> NULL
Insert 25 after 20:
After:  NULL <-> [10] <-> [20] <-> [25] <-> [30] <-> NULL
```

---

## Q19. Write an algorithm for insertion of node at First and last position in Linear Linked List.
**(GTU: S22, W23, W22, S24) [7 Marks]**

(Same as Q14 - Refer to Q14 for detailed answer)

---

## Q20. Explain creation, insertion and deletion of doubly linked list with example.
**(GTU: S23, W23, W24) [7 Marks]**

### Answer:

### Creation of Doubly Linked List:

```c
struct Node {
    struct Node *prev;
    int data;
    struct Node *next;
};

// Create node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->prev = NULL;
    newNode->next = NULL;
    return newNode;
}
```

### Insertion Operations:

#### Insert at Beginning:
```
Before: NULL <-> [20] <-> [30] <-> NULL (HEAD at 20)
Insert 10 at beginning:
After:  NULL <-> [10] <-> [20] <-> [30] <-> NULL (HEAD at 10)
```

#### Insert at End:
```
Before: NULL <-> [10] <-> [20] <-> NULL
Insert 30 at end:
After:  NULL <-> [10] <-> [20] <-> [30] <-> NULL
```

### Deletion Operations:

#### Delete from Beginning:
```
Algorithm DELETE_BEGINNING(HEAD)
1. IF HEAD = NULL: Return NULL
2. TEMP = HEAD
3. HEAD = HEAD->next
4. IF HEAD != NULL: HEAD->prev = NULL
5. Free(TEMP)
6. Return HEAD
```

#### Delete from End:
```
Algorithm DELETE_END(HEAD)
1. IF HEAD = NULL: Return NULL
2. IF HEAD->next = NULL: Free(HEAD), Return NULL
3. TEMP = HEAD
4. WHILE TEMP->next != NULL: TEMP = TEMP->next
5. TEMP->prev->next = NULL
6. Free(TEMP)
7. Return HEAD
```

### Example Execution:
```
Create: HEAD -> NULL
Insert 10: NULL <-> [10] <-> NULL
Insert 20 at end: NULL <-> [10] <-> [20] <-> NULL
Insert 5 at beginning: NULL <-> [5] <-> [10] <-> [20] <-> NULL
Delete from beginning: NULL <-> [10] <-> [20] <-> NULL
Delete from end: NULL <-> [10] <-> NULL
```

---

# UNIT 03: NONLINEAR DATA STRUCTURE (CO 3)

---

## Q21. Define following terms.
**(GTU: S22, W23, S23, S25) [7 Marks]**

### Answer:

#### 1. Graph:
A **Graph** is a non-linear data structure consisting of vertices (nodes) and edges (connections between vertices).
- G = (V, E) where V = set of vertices, E = set of edges
- Example: Social networks, Maps

#### 2. Complete Binary Tree:
A **Complete Binary Tree** is a binary tree where all levels are completely filled except possibly the last level, which is filled from left to right.
```
        1
       / \
      2   3
     / \  /
    4  5 6
```

#### 3. Balance Factor:
**Balance Factor** of a node in AVL tree = Height of Left Subtree - Height of Right Subtree
- BF = hL - hR
- For AVL tree: BF must be -1, 0, or 1

#### 4. Cyclic Graph:
A **Cyclic Graph** is a graph that contains at least one cycle (closed path).
```
A --- B
|     |
D --- C
```

#### 5. Siblings:
**Siblings** are nodes that have the same parent in a tree.
```
      A
     / \
    B   C   <- B and C are siblings
```

#### 6. Strictly Binary Tree:
A **Strictly Binary Tree** (Full Binary Tree) is a binary tree where every node has either 0 or 2 children (never 1).
```
      1
     / \
    2   3
   / \
  4   5
```

#### 7. Depth of Tree:
**Depth** of a tree is the length of the path from root to the deepest node. Also called height.
- Depth of root = 0
- Depth = Maximum level in tree

#### 8. Balanced Tree:
A **Balanced Tree** is a tree where the heights of left and right subtrees of any node differ by at most 1.
- Examples: AVL tree, Red-Black tree

#### 9. Spanning Tree:
A **Spanning Tree** of a connected graph G is a subgraph that includes all vertices of G with minimum number of edges (n-1 edges for n vertices) and no cycles.

---

## Q22. Construct binary search tree and find Inorder, Preorder and Postorder Traversal.
**(GTU: W23, S24, W24, S23) [7 Marks]**

### Answer:

### Data: 10, 3, 15, 22, 6, 45, 65, 23, 78, 34, 5

### BST Construction Rules:
- Left child < Parent
- Right child > Parent

### Step-by-step Construction:
```
Insert 10: Root = 10
Insert 3:  3 < 10, goes left
Insert 15: 15 > 10, goes right
Insert 22: 22 > 10 > 15, goes right of 15
Insert 6:  6 < 10 > 3, goes right of 3
Insert 45: 45 > 10 > 15 > 22, goes right of 22
Insert 65: 65 > 10 > 15 > 22 > 45, goes right of 45
Insert 23: 23 > 10 > 15 > 22 < 45, goes left of 45
Insert 78: 78 > 10 > 15 > 22 > 45 > 65, goes right of 65
Insert 34: 34 > 10 > 15 > 22 < 45 > 23, goes right of 23
Insert 5:  5 < 10 > 3 < 6, goes left of 6
```

### Final BST:
```
                    10
                   /  \
                  3    15
                   \     \
                    6     22
                   /        \
                  5          45
                            /  \
                          23    65
                            \     \
                            34    78
```

### Tree Traversals:

#### 1. Inorder (Left-Root-Right):
**3, 5, 6, 10, 15, 22, 23, 34, 45, 65, 78**
(Gives sorted order for BST)

#### 2. Preorder (Root-Left-Right):
**10, 3, 6, 5, 15, 22, 45, 23, 34, 65, 78**

#### 3. Postorder (Left-Right-Root):
**5, 6, 3, 34, 23, 78, 65, 45, 22, 15, 10**

---

## Q23. Construct a tree for the given Inorder and Preorder traversals.
**(GTU: W23, S24, S25, W24) [7 Marks]**

### Answer:

### Given:
- **Preorder:** G B Q A C K F P D E R H
- **Inorder:** Q B K C F A G P E D H R

### Construction Method:
1. First element of Preorder is root
2. Find root in Inorder - left part is left subtree, right part is right subtree
3. Recursively apply for subtrees

### Step-by-step:

**Step 1:** Root = G (first in preorder)
Inorder: [Q B K C F A] G [P E D H R]
Left subtree: Q B K C F A
Right subtree: P E D H R

**Step 2:** Left subtree root = B
Inorder: [Q] B [K C F A]

**Step 3:** Continue recursively...

### Final Tree:
```
                G
               / \
              B   P
             / \   \
            Q   A   D
               /   / \
              C   E   R
             / \     /
            K   F   H
```

### Verification:
- **Inorder (L-Root-R):** Q B K C F A G P E D H R ✓
- **Preorder (Root-L-R):** G B Q A C K F P D E R H ✓

---

## Q24. Show the resultant BST after applying operations: Delete 8, Insert 9, Delete 7.
**(GTU: W23, S24, S25) [7 Marks]**

### Answer:

### Assuming Initial BST:
```
        10
       /  \
      5    15
     / \   /
    3   7 12
       /
      6
       \
        8
```

### Operation (a): Delete 8
8 is a leaf node, simply remove it.
```
        10
       /  \
      5    15
     / \   /
    3   7 12
       /
      6
```

### Operation (b): Insert 9
9 > 5, 9 > 7, 9 > 6... goes to right of 6 (or appropriate position)
Actually: 9 < 10, 9 > 5, 9 > 7
```
        10
       /  \
      5    15
     / \   /
    3   7 12
       / \
      6   9
```

### Operation (c): Delete 7
7 has two children (6 and 9). Replace with inorder successor (9) or predecessor (6).
Using inorder successor (9):
```
        10
       /  \
      5    15
     / \   /
    3   9 12
       /
      6
```

### Final BST:
```
        10
       /  \
      5    15
     / \   /
    3   9 12
       /
      6
```

---

## Q25. Prove that a binary tree with 20 nodes have 21 null branches.
**(GTU: W24, S25, W23) [4 Marks]**

### Answer:

### Theorem:
A binary tree with n nodes has exactly (n + 1) null branches (NULL pointers).

### Proof:

**Method 1: Counting Pointers**

1. Each node in binary tree has exactly 2 pointer fields (left and right)
2. Total pointer fields = 2n (for n nodes)

3. Non-NULL pointers = Number of edges in tree
4. For a tree with n nodes, edges = n - 1

5. NULL pointers = Total pointers - Non-NULL pointers
6. NULL pointers = 2n - (n - 1)
7. NULL pointers = 2n - n + 1
8. **NULL pointers = n + 1**

### For n = 20 nodes:
NULL branches = 20 + 1 = **21**

### Verification with Example:
```
      1
     / \
    2   3
   /
  4
```
- Nodes = 4
- Total pointers = 8
- Edges = 3
- NULL pointers = 8 - 3 = 5 = 4 + 1 ✓

**Hence Proved: A binary tree with 20 nodes has 21 null branches.**

---

## Q26. Write a short note on threaded binary tree.
**(GTU: S22, W23, W22, S24) [4 Marks]**

### Answer:

### Threaded Binary Tree Definition:
A **Threaded Binary Tree** is a binary tree where NULL pointers are replaced with pointers to inorder predecessor or successor, called **threads**.

### Purpose:
- Efficient inorder traversal without recursion or stack
- Utilize wasted NULL pointers

### Types:

#### 1. One-way Threaded (Right Threaded):
- Right NULL pointer points to inorder successor
- Left pointers remain as is

#### 2. Two-way Threaded:
- Right NULL -> Inorder successor
- Left NULL -> Inorder predecessor

### Structure:
```c
struct Node {
    int data;
    struct Node *left, *right;
    bool leftThread, rightThread;  // flags
};
```

### Example:
```
Normal BST:           Threaded BST:
      4                    4
     / \                  / \
    2   5                2-->5
   / \                  / \   \
  1   3                1-->3-->NULL
```
Threads: 1->2, 3->4, 5->NULL (successor links)

### Advantages:
1. Linear time inorder traversal
2. No stack/recursion needed
3. Better utilization of memory

### Disadvantages:
1. Extra space for thread flags
2. Complex insertion/deletion

---

## Q27. Explain DFS and BFS with appropriate example.
**(GTU: S23, W23, W24) [7 Marks]**

### Answer:

### Graph Traversal Methods:

### 1. BFS (Breadth First Search):
Visits all neighbors at current depth before moving to next level.

**Uses:** Queue data structure

**Algorithm:**
```
BFS(Graph G, start vertex s):
1. Create a queue Q
2. Mark s as visited, enqueue s
3. While Q is not empty:
   a. Dequeue vertex v
   b. For each unvisited neighbor u of v:
      - Mark u as visited
      - Enqueue u
```

### 2. DFS (Depth First Search):
Goes as deep as possible before backtracking.

**Uses:** Stack (or recursion)

**Algorithm:**
```
DFS(Graph G, start vertex s):
1. Create a stack S
2. Push s onto S
3. While S is not empty:
   a. Pop vertex v
   b. If v is not visited:
      - Mark v as visited
      - Push all unvisited neighbors onto S
```

### Example Graph:
```
    A --- B
    |     |
    C --- D --- E
```
Adjacency: A-B, A-C, B-D, C-D, D-E

### BFS Traversal (starting from A):
Queue operations:
| Step | Queue | Visited | Output |
|------|-------|---------|--------|
| 1 | [A] | A | A |
| 2 | [B,C] | A,B,C | B,C |
| 3 | [C,D] | A,B,C,D | D |
| 4 | [D] | A,B,C,D | - |
| 5 | [E] | A,B,C,D,E | E |

**BFS Order: A, B, C, D, E**

### DFS Traversal (starting from A):
Stack operations:
| Step | Stack | Visited | Output |
|------|-------|---------|--------|
| 1 | [A] | A | A |
| 2 | [B,C] | A,B | B |
| 3 | [C,D] | A,B,D | D |
| 4 | [C,E] | A,B,D,E | E |
| 5 | [C] | A,B,D,E,C | C |

**DFS Order: A, B, D, E, C**

### Comparison:

| Aspect | BFS | DFS |
|--------|-----|-----|
| Data Structure | Queue | Stack |
| Memory | More | Less |
| Complete | Yes | Yes |
| Optimal | Yes (unweighted) | No |
| Application | Shortest path | Topological sort |

---

## Q28. Define spanning tree and minimum spanning tree. Find MST using Prims and Kruskals Algorithm.
**(GTU: W24, S23, W23) [7 Marks]**

### Answer:

### Spanning Tree:
A **Spanning Tree** of a connected graph G is a subgraph that:
- Includes all vertices of G
- Has exactly (n-1) edges for n vertices
- Contains no cycles
- Is connected

### Minimum Spanning Tree (MST):
A **Minimum Spanning Tree** is a spanning tree with the minimum total edge weight.

### Example Graph:
```
    A --4-- B
    |     / |
    1   2   3
    | /     |
    C --5-- D
```
Edges: A-B(4), A-C(1), B-C(2), B-D(3), C-D(5)

### Prims Algorithm:
Grows MST from a starting vertex by adding minimum weight edge.

**Steps (starting from A):**
| Step | MST Vertices | Edge Added | Weight |
|------|-------------|------------|--------|
| 1 | {A} | A-C | 1 |
| 2 | {A,C} | C-B | 2 |
| 3 | {A,C,B} | B-D | 3 |

**MST Edges:** A-C(1), C-B(2), B-D(3)
**Total Weight:** 1 + 2 + 3 = **6**

### Kruskal's Algorithm:
Sorts all edges and adds minimum weight edges that don't form cycle.

**Sorted Edges:** A-C(1), B-C(2), B-D(3), A-B(4), C-D(5)

| Step | Edge | Weight | Action |
|------|------|--------|--------|
| 1 | A-C | 1 | Add (no cycle) |
| 2 | B-C | 2 | Add (no cycle) |
| 3 | B-D | 3 | Add (no cycle) |
| 4 | A-B | 4 | Skip (forms cycle) |
| 5 | C-D | 5 | Skip (forms cycle) |

**MST Edges:** A-C(1), B-C(2), B-D(3)
**Total Weight:** 1 + 2 + 3 = **6**

### MST Visualization:
```
    A       B
    |     / |
    1   2   3
    | /     |
    C       D
```

---

## Q29. Construct AVL Tree for: 1, 2, 3, 4, 8, 7, 6, 5, 11, 10, 12
**(GTU: S22, W23, W22, S24) [7 Marks]**

### Answer:

### AVL Tree Rules:
- BST property: Left < Root < Right
- Balance Factor: -1, 0, or +1
- Rotations: LL, RR, LR, RL

### Construction:

**Insert 1:** 
```
[1]  BF=0
```

**Insert 2:**
```
[1]  BF=-1
  \
  [2]
```

**Insert 3:** (RR Rotation needed, BF of 1 becomes -2)
```
Before:       After RR:
[1] BF=-2        [2]
  \             /   \
  [2]         [1]   [3]
    \
    [3]
```

**Insert 4:** (RR Rotation at 3)
```
Before:          After:
    [2]            [2]
   /   \          /   \
 [1]   [3]      [1]   [4]
         \            /  
         [4]        [3]
```

**Insert 4:**
```
    [2]     BF=-1
   /   \
 [1]   [3]  BF=-1
         \
         [4]
```
No rotation needed.

**Insert 8:** (RR at node 3)
```
    [2]                [2]
   /   \              /   \
 [1]   [3]    =>    [1]   [4]
         \                /  \
         [4]            [3]  [8]
           \
           [8]
```

**Insert 7:** (RL at 8)
```
        [2]                    [2]
       /   \                  /   \
     [1]   [4]              [1]   [4]
          /  \        =>         /  \
        [3]  [8]               [3]  [7]
             /                     /  \
           [7]                   [8]   
```

### Final AVL Tree (after all insertions and rotations):
```
          [4]
        /     \
      [2]      [7]
     /  \     /   \
   [1]  [3] [5]   [10]
              \    / \
              [6][8] [11]
                      \
                     [12]
```

*Note: Exact tree depends on rotation sequence. Key rotations occur when BF becomes +2 or -2.*

---

## Q30. Apply Dijkstra's algorithm on graph with Node A as starting node.
**(GTU: S24, W23, W22, S21) [7 Marks]**

### Answer:

### Dijkstra's Algorithm:
Finds shortest path from source to all vertices in weighted graph.

### Example Graph:
```
    A --2-- B --4-- E
    |       |       |
    4       1       3
    |       |       |
    C --3-- D --2---+
```

### Algorithm Steps:

**Initialize:**
| Vertex | Distance | Visited | Previous |
|--------|----------|---------|----------|
| A | 0 | No | - |
| B | INF | No | - |
| C | INF | No | - |
| D | INF | No | - |
| E | INF | No | - |

**Step 1:** Visit A (min distance)
Update neighbors: B=2, C=4

| Vertex | Distance | Visited |
|--------|----------|---------|
| A | 0 | Yes |
| B | 2 | No |
| C | 4 | No |
| D | INF | No |
| E | INF | No |

**Step 2:** Visit B (min=2)
Update: D=2+1=3, E=2+4=6

| Vertex | Distance | Visited |
|--------|----------|---------|
| A | 0 | Yes |
| B | 2 | Yes |
| C | 4 | No |
| D | 3 | No |
| E | 6 | No |

**Step 3:** Visit D (min=3)
Update: C=min(4, 3+3)=4, E=min(6, 3+2)=5

| Vertex | Distance | Visited |
|--------|----------|---------|
| D | 3 | Yes |
| C | 4 | No |
| E | 5 | No |

**Step 4:** Visit C (min=4)
No better paths found.

**Step 5:** Visit E (min=5)
All visited.

### Final Shortest Distances from A:
| Vertex | Shortest Distance | Path |
|--------|------------------|------|
| A | 0 | A |
| B | 2 | A->B |
| C | 4 | A->C |
| D | 3 | A->B->D |
| E | 5 | A->B->D->E |

---

## Q31. Construct 5 Order (5 Way) B-Tree from data.
**(GTU: W24, S24, W23, S23) [7 Marks]**

### Answer:

### Data: 1, 7, 6, 2, 11, 5, 10, 13, 12, 20, 16, 24, 3, 4, 18, 19, 14, 25

### B-Tree Properties (Order 5):
- Maximum keys per node: 4
- Minimum keys (non-root): 2
- Maximum children: 5
- Minimum children (non-root): 3

### Construction (simplified):

**Insert 1, 7, 6, 2:**
```
[1, 2, 6, 7]
```

**Insert 11:** Node full, split at median (6)
```
      [6]
     /   \
[1,2]   [7,11]
```

**Continue insertions...**

### Final B-Tree Structure:
```
                    [6, 12]
                   /   |   \
           [1,2,3,4,5] [7,10,11] [13,14,16,18,19,20,24,25]
```

*Note: Actual structure varies based on insertion order and splitting strategy.*

### Key Operations:
- **Search:** O(log n)
- **Insert:** O(log n)  
- **Delete:** O(log n)

---

# UNIT 04: HASHING AND FILE STRUCTURES (CO 4)

---

## Q32. What is hashing? Explain Different Hashing techniques in brief.
**(GTU: W24, S25, W22) [7 Marks]**

### Answer:

### Hashing Definition:
**Hashing** is a technique to convert a key into an index (hash value) for storing and retrieving data in constant time O(1).

### Components:
- **Hash Table:** Array to store data
- **Hash Function:** Maps key to index
- **Hash Value:** Computed index

### Formula:
```
Index = h(key) = key % table_size
```

### Hashing Techniques:

#### 1. Division Method:
```
h(k) = k mod m
```
- m = table size (preferably prime)
- Example: h(25) = 25 mod 10 = 5

#### 2. Multiplication Method:
```
h(k) = floor(m * (k * A mod 1))
```
- A = constant (0 < A < 1), typically 0.618
- Example: h(123) with m=100, A=0.618

#### 3. Mid-Square Method:
```
1. Square the key
2. Extract middle digits as hash
```
- Example: key=25, 25^2=625, middle=2, h(25)=2

#### 4. Folding Method:
```
1. Divide key into parts
2. Add parts together
3. Use result mod table_size
```
- Example: key=123456, parts=12+34+56=102, h=102 mod 10=2

#### 5. Digit Extraction:
```
Extract specific digits from key
```
- Example: key=7654321, extract positions 2,4,6 = 542

### Characteristics of Good Hash Function:
1. Uniform distribution
2. Easy to compute
3. Minimize collisions
4. Use entire key

---

## Q33. Build a chained hash table of 10 memory locations. Insert keys using chaining.
**(GTU: S22, W23, W22, S24) [7 Marks]**

### Answer:

### Keys: 131, 3, 4, 21, 61, 24, 7, 97, 8, 9
### Hash Function: h(k) = k mod 10
### Table Size: 10

### Hash Value Calculation:

| Key | h(k) = k mod 10 | Index |
|-----|-----------------|-------|
| 131 | 131 mod 10 | 1 |
| 3 | 3 mod 10 | 3 |
| 4 | 4 mod 10 | 4 |
| 21 | 21 mod 10 | 1 |
| 61 | 61 mod 10 | 1 |
| 24 | 24 mod 10 | 4 |
| 7 | 7 mod 10 | 7 |
| 97 | 97 mod 10 | 7 |
| 8 | 8 mod 10 | 8 |
| 9 | 9 mod 10 | 9 |

### Chained Hash Table:

```
Index | Chain (Linked List)
------|--------------------
  0   | NULL
  1   | [131] -> [21] -> [61] -> NULL
  2   | NULL
  3   | [3] -> NULL
  4   | [4] -> [24] -> NULL
  5   | NULL
  6   | NULL
  7   | [7] -> [97] -> NULL
  8   | [8] -> NULL
  9   | [9] -> NULL
```

### Visualization:
```
[0] -> NULL
[1] -> [131] -> [21] -> [61]
[2] -> NULL
[3] -> [3]
[4] -> [4] -> [24]
[5] -> NULL
[6] -> NULL
[7] -> [7] -> [97]
[8] -> [8]
[9] -> [9]
```

### Collision Resolution:
- Index 1: 3 collisions (131, 21, 61)
- Index 4: 1 collision (4, 24)
- Index 7: 1 collision (7, 97)

---

## Q34. Explain collision in the context of hashing? Discuss collision resolution techniques.
**(GTU: S23, W22, W24, S25) [7 Marks]**

### Answer:

### Collision Definition:
**Collision** occurs when two or more keys hash to the same index in the hash table.

Example: h(25) = h(35) = 5 (if h(k) = k mod 10)

### Collision Resolution Techniques:

#### 1. Open Addressing (Closed Hashing):
All elements stored in hash table itself.

##### (a) Linear Probing:
```
h(k, i) = (h(k) + i) mod m
```
- Search sequentially for next empty slot
- Problem: Primary clustering

##### (b) Quadratic Probing:
```
h(k, i) = (h(k) + c1*i + c2*i^2) mod m
```
- Uses quadratic function to find slot
- Problem: Secondary clustering

##### (c) Double Hashing:
```
h(k, i) = (h1(k) + i * h2(k)) mod m
```
- Uses second hash function
- Best distribution

#### 2. Chaining (Open Hashing):
Each slot contains a linked list of all elements hashing to that index.

```
[0] -> [10] -> [20] -> NULL
[1] -> [11] -> NULL
[2] -> [2] -> [12] -> [22] -> NULL
```

### Comparison:

| Aspect | Open Addressing | Chaining |
|--------|----------------|----------|
| Memory | Fixed table | Dynamic |
| Performance | Degrades with load | Stable |
| Deletion | Difficult | Easy |
| Cache | Better | Worse |
| Load Factor | < 1 | Can be > 1 |

### Load Factor:
```
α = n / m
```
- n = number of elements
- m = table size

---

## Q35. Define hash function. Describe any two hash methods with example.
**(GTU: W24, S25, W22, S24) [7 Marks]**

### Answer:

### Hash Function Definition:
A **Hash Function** is a mathematical function that maps data of arbitrary size to fixed-size values. It converts keys to array indices.

### Properties:
1. Deterministic: Same input always gives same output
2. Efficient: Quick to compute
3. Uniform: Distributes keys evenly
4. Minimal collisions

### Method 1: Division Method

**Formula:** h(k) = k mod m

**Example:**
- Table size m = 10
- Keys: 54, 26, 93, 17, 77, 31

| Key | h(k) = k mod 10 |
|-----|-----------------|
| 54 | 4 |
| 26 | 6 |
| 93 | 3 |
| 17 | 7 |
| 77 | 7 (collision with 17) |
| 31 | 1 |

**Hash Table:**
```
[0] = empty
[1] = 31
[2] = empty
[3] = 93
[4] = 54
[5] = empty
[6] = 26
[7] = 17 -> 77 (chained)
[8] = empty
[9] = empty
```

### Method 2: Mid-Square Method

**Steps:**
1. Square the key
2. Extract middle r digits (r = number of digits in table size)

**Example:**
- Table size = 100 (need 2 digits)
- Keys: 25, 36, 49

| Key | Key^2 | Middle 2 digits |
|-----|-------|-----------------|
| 25 | 625 | 62 |
| 36 | 1296 | 29 |
| 49 | 2401 | 40 |

**Advantages of Mid-Square:**
- Uses entire key in calculation
- Good distribution
- Works well for non-uniformly distributed keys

---

## Q36. What is file? Explain various types of file organization. Explain indexing and sequential structure.
**(GTU: W24, S25, W23, W22) [7 Marks]**

### Answer:

### File Definition:
A **File** is a collection of related records stored on secondary storage (disk). Each record contains fields representing attributes of an entity.

### File Organization Types:

#### 1. Sequential File Organization:
Records stored in sequence based on a key field.

**Characteristics:**
- Records stored one after another
- Access is sequential
- Efficient for batch processing
- Inefficient for random access

```
Record 1 -> Record 2 -> Record 3 -> Record 4 -> ...
```

**Advantages:**
- Simple implementation
- Efficient for reading all records
- Low storage overhead

**Disadvantages:**
- Slow random access
- Insertions require file reorganization

#### 2. Indexed Sequential Organization (ISAM):
Combines sequential storage with an index for faster access.

**Structure:**
```
Index:
[Key: 100] -> Block 1
[Key: 200] -> Block 2
[Key: 300] -> Block 3

Data Blocks:
Block 1: [100][120][150][180]
Block 2: [200][220][250][280]
Block 3: [300][320][350][380]
```

**Advantages:**
- Fast random access via index
- Sequential access still possible
- Good for range queries

#### 3. Direct (Hashed) File Organization:
Uses hash function to determine record location.

**Formula:** Address = h(key)

**Advantages:**
- Very fast random access O(1)
- No index overhead

**Disadvantages:**
- Poor sequential access
- Collisions need handling

#### 4. Indexed File Organization:
Separate index file points to data records.

**Types of Indexes:**
- **Dense Index:** Entry for every record
- **Sparse Index:** Entry for every block

### Index Structure:
```
Primary Index:
[Key | Pointer]
[101 | -> Record 1]
[102 | -> Record 2]
[103 | -> Record 3]
```

---

## Q37. Define terms with respect to file: fields, records, database. List out application of hashing.
**(GTU: W24, S24, W23, S23) [4 Marks]**

### Answer:

### File Terminology:

#### 1. Field:
A **Field** is the smallest unit of data that has meaning. It represents a single attribute of an entity.

**Examples:**
- Name: "John"
- Age: 25
- Roll_No: 101

#### 2. Record:
A **Record** is a collection of related fields that represent one instance of an entity.

**Example:**
```
Student Record:
| Roll_No | Name  | Age | Branch |
|   101   | John  | 20  | CS     |
```

#### 3. Database:
A **Database** is a collection of interrelated files organized to serve applications efficiently.

**Hierarchy:**
```
Database
   |
   +-- File 1 (Students)
   |      +-- Record 1
   |      |     +-- Field 1 (Roll_No)
   |      |     +-- Field 2 (Name)
   |      +-- Record 2
   |
   +-- File 2 (Courses)
```

### Applications of Hashing:

1. **Database Indexing:** Fast record retrieval
2. **Symbol Tables:** Compiler design
3. **Caching:** Web browsers, DNS lookup
4. **Password Storage:** Secure password verification
5. **Data Integrity:** Checksums, digital signatures
6. **Cryptography:** SHA, MD5 algorithms
7. **Load Balancing:** Consistent hashing
8. **Dictionaries:** Key-value stores
9. **Spell Checkers:** Word lookup
10. **Plagiarism Detection:** Document fingerprinting

---

# UNIT 05: SORTING AND SEARCHING (CO 5)

---

## Q38. Write an algorithm for Bubble sort explain with example.
**(GTU: S25, W23, S24, W22) [7 Marks]**

### Answer:

### Bubble Sort Definition:
**Bubble Sort** is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### Algorithm:

```
Algorithm BubbleSort(A, n)
Step 1: FOR i = 0 TO n-2 DO
Step 2:     FOR j = 0 TO n-i-2 DO
Step 3:         IF A[j] > A[j+1] THEN
Step 4:             SWAP(A[j], A[j+1])
Step 5:         END IF
Step 6:     END FOR
Step 7: END FOR
```

### Example:
**Array:** [5, 3, 8, 4, 2]

**Pass 1:**
```
[5, 3, 8, 4, 2] -> Compare 5,3 -> Swap -> [3, 5, 8, 4, 2]
[3, 5, 8, 4, 2] -> Compare 5,8 -> No swap
[3, 5, 8, 4, 2] -> Compare 8,4 -> Swap -> [3, 5, 4, 8, 2]
[3, 5, 4, 8, 2] -> Compare 8,2 -> Swap -> [3, 5, 4, 2, 8]
```
After Pass 1: [3, 5, 4, 2, **8**] (8 is in correct position)

**Pass 2:**
```
[3, 5, 4, 2, 8] -> [3, 5, 4, 2, 8] (3<5, no swap)
[3, 5, 4, 2, 8] -> [3, 4, 5, 2, 8] (swap 5,4)
[3, 4, 5, 2, 8] -> [3, 4, 2, 5, 8] (swap 5,2)
```
After Pass 2: [3, 4, 2, **5, 8**]

**Pass 3:**
```
[3, 4, 2, 5, 8] -> [3, 4, 2, 5, 8]
[3, 4, 2, 5, 8] -> [3, 2, 4, 5, 8]
```
After Pass 3: [3, 2, **4, 5, 8**]

**Pass 4:**
```
[3, 2, 4, 5, 8] -> [2, 3, 4, 5, 8]
```
After Pass 4: [**2, 3, 4, 5, 8**] - SORTED!

### Time Complexity:
| Case | Complexity |
|------|------------|
| Best | O(n) - already sorted with optimization |
| Average | O(n^2) |
| Worst | O(n^2) |

### Space Complexity: O(1) - In-place sorting

---

## Q39. Apply quick sort for the following data: 42, 23, 74, 11, 65, 58, 94, 36, 99, 87
**(GTU: W22, S23, W24, S23) [7 Marks]**

### Answer:

### Quick Sort Algorithm:
```
QuickSort(A, low, high)
1. IF low < high THEN
2.     pivot = Partition(A, low, high)
3.     QuickSort(A, low, pivot-1)
4.     QuickSort(A, pivot+1, high)
```

### Data: [42, 23, 74, 11, 65, 58, 94, 36, 99, 87]

### Partition Process (using last element as pivot):

**Level 1:** Array [42, 23, 74, 11, 65, 58, 94, 36, 99, 87]
- Pivot = 87
- Elements < 87: [42, 23, 74, 11, 65, 58, 36]
- Elements > 87: [94, 99]
- Result: [42, 23, 74, 11, 65, 58, 36] **87** [94, 99]

**Level 2 Left:** [42, 23, 74, 11, 65, 58, 36]
- Pivot = 36
- Elements < 36: [23, 11]
- Elements > 36: [42, 74, 65, 58]
- Result: [23, 11] **36** [42, 74, 65, 58]

**Level 2 Right:** [94, 99]
- Pivot = 99
- Result: [94] **99** []

**Level 3:** Continue partitioning...

### Step-by-Step Trace:

| Step | Array State | Pivot |
|------|-------------|-------|
| 1 | [42,23,74,11,65,58,94,36,99,87] | 87 |
| 2 | [42,23,74,11,65,58,36,**87**,94,99] | - |
| 3 | Left: [42,23,74,11,65,58,36] | 36 |
| 4 | [23,11,**36**,42,74,65,58] | - |
| 5 | [11,**23**,36,...] | 23 |
| ... | Continue... | ... |

### Final Sorted Array:
**[11, 23, 36, 42, 58, 65, 74, 87, 94, 99]**

### Time Complexity:
| Case | Complexity |
|------|------------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n^2) - sorted array |

---

## Q40. Write the algorithm for binary search. Search 50 from given data.
**(GTU: W21, W22, W24, S24) [7 Marks]**

### Answer:

### Binary Search Algorithm:

```
Algorithm BinarySearch(A, n, key)
Step 1: low = 0, high = n - 1
Step 2: WHILE (low <= high) DO
Step 3:     mid = (low + high) / 2
Step 4:     IF A[mid] == key THEN
Step 5:         Return mid    // Found
Step 6:     ELSE IF A[mid] < key THEN
Step 7:         low = mid + 1  // Search right
Step 8:     ELSE
Step 9:         high = mid - 1 // Search left
Step 10:    END IF
Step 11: END WHILE
Step 12: Return -1             // Not found
```

### Given Data: 10, 14, 20, 39, 41, 45, 49, 50, 60
### Key to Search: 50

### Note: Data is already sorted (required for binary search)

### Search Process:

| Step | low | high | mid | A[mid] | Comparison | Action |
|------|-----|------|-----|--------|------------|--------|
| 1 | 0 | 8 | 4 | 41 | 50 > 41 | low = 5 |
| 2 | 5 | 8 | 6 | 49 | 50 > 49 | low = 7 |
| 3 | 7 | 8 | 7 | 50 | 50 == 50 | FOUND! |

### Visualization:
```
Step 1:
[10, 14, 20, 39, 41, 45, 49, 50, 60]
  0   1   2   3   4   5   6   7   8
              ^mid=4
              41 < 50, search right

Step 2:
[10, 14, 20, 39, 41, 45, 49, 50, 60]
                       5   6   7   8
                           ^mid=6
                           49 < 50, search right

Step 3:
[10, 14, 20, 39, 41, 45, 49, 50, 60]
                               7   8
                               ^mid=7
                               50 == 50, FOUND!
```

### Result:
**Element 50 found at index 7**
**Number of comparisons: 3**

### Time Complexity:
- Best Case: O(1) - element at middle
- Worst Case: O(log n)
- Average Case: O(log n)

---

## Q41. Apply merge sort algorithm to: 724, 521, 2, 98, 529, 31, 189, 451
**(GTU: S23, W22, W24, S25) [7 Marks]**

### Answer:

### Merge Sort Algorithm:
```
MergeSort(A, left, right)
1. IF left < right THEN
2.     mid = (left + right) / 2
3.     MergeSort(A, left, mid)
4.     MergeSort(A, mid+1, right)
5.     Merge(A, left, mid, right)
```

### Data: [724, 521, 2, 98, 529, 31, 189, 451]

### Divide Phase:

```
                    [724, 521, 2, 98, 529, 31, 189, 451]
                                    |
                    --------------------------------
                    |                              |
            [724, 521, 2, 98]              [529, 31, 189, 451]
                    |                              |
               -----------                    -----------
               |         |                    |         |
          [724,521]   [2,98]              [529,31]  [189,451]
              |         |                    |         |
           -----     -----                -----     -----
           |   |     |   |                |   |     |   |
         [724][521] [2] [98]            [529][31] [189][451]
```

### Merge Phase (Conquer):

**Level 1 - Merge pairs:**
```
[724][521] -> [521, 724]
[2][98]    -> [2, 98]
[529][31]  -> [31, 529]
[189][451] -> [189, 451]
```

**Level 2 - Merge quads:**
```
[521,724] + [2,98] -> [2, 98, 521, 724]
[31,529] + [189,451] -> [31, 189, 451, 529]
```

**Level 3 - Final merge:**
```
[2, 98, 521, 724] + [31, 189, 451, 529]

Merge process:
- Compare 2, 31 -> Take 2
- Compare 98, 31 -> Take 31
- Compare 98, 189 -> Take 98
- Compare 521, 189 -> Take 189
- Compare 521, 451 -> Take 451
- Compare 521, 529 -> Take 521
- Compare 724, 529 -> Take 529
- Take 724

Result: [2, 31, 98, 189, 451, 521, 529, 724]
```

### Final Sorted Array:
**[2, 31, 98, 189, 451, 521, 529, 724]**

### Time Complexity:
| Case | Complexity |
|------|------------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

### Space Complexity: O(n) - requires auxiliary array

---

## Q42. Write an algorithm for sequential search. Compare sequential and binary search methods.
**(GTU: Various) [7 Marks]**

### Answer:

### Sequential (Linear) Search Algorithm:

```
Algorithm LinearSearch(A, n, key)
Step 1: FOR i = 0 TO n-1 DO
Step 2:     IF A[i] == key THEN
Step 3:         Return i      // Found at index i
Step 4:     END IF
Step 5: END FOR
Step 6: Return -1             // Not found
```

### Example:
Array: [15, 8, 23, 4, 42, 16]
Key: 42

| Step | i | A[i] | Comparison |
|------|---|------|------------|
| 1 | 0 | 15 | 15 != 42 |
| 2 | 1 | 8 | 8 != 42 |
| 3 | 2 | 23 | 23 != 42 |
| 4 | 3 | 4 | 4 != 42 |
| 5 | 4 | 42 | 42 == 42, FOUND! |

Result: Element found at index 4

### Comparison: Sequential vs Binary Search

| Parameter | Sequential Search | Binary Search |
|-----------|------------------|---------------|
| **Prerequisite** | None | Array must be sorted |
| **Best Case** | O(1) | O(1) |
| **Average Case** | O(n) | O(log n) |
| **Worst Case** | O(n) | O(log n) |
| **Space** | O(1) | O(1) iterative, O(log n) recursive |
| **Approach** | Linear scan | Divide and Conquer |
| **Implementation** | Simple | Moderate |
| **Data Structure** | Any (Array, List) | Array only |
| **For n=1000** | Up to 1000 comparisons | Up to 10 comparisons |
| **For n=1000000** | Up to 1000000 comparisons | Up to 20 comparisons |
| **Sorted Data** | No advantage | Required |
| **Unsorted Data** | Works | Cannot use |

### When to Use:

**Use Sequential Search when:**
- Data is unsorted
- Data set is small
- Searching once in a while
- Working with linked lists

**Use Binary Search when:**
- Data is sorted
- Frequent searches needed
- Large data sets
- Arrays/random access available

### Performance Comparison Graph:
```
Comparisons
    ^
    |     Sequential O(n)
    |    /
    |   /
    |  /      Binary O(log n)
    | /   ___________
    |/____|__________
    +-------------------> n (input size)
```

---

# END OF DATA STRUCTURES GTU NOTES

---

## Quick Reference - Time Complexities

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Stack Operations | O(1) | O(1) | O(1) | O(n) |
| Queue Operations | O(1) | O(1) | O(1) | O(n) |
| BST Search | O(1) | O(log n) | O(n) | O(n) |
| Hash Table | O(1) | O(1) | O(n) | O(n) |

---

**Prepared for GTU Data Structures Exam Preparation**
**Subject Code: BE03000081**
**3rd Semester**

