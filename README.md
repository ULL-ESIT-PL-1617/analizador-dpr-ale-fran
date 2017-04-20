## Gramática

statements --> statement ; statements | statement ;
statement  --> IF condition THEN { statement } | ID = expression | P statement | WHILE condition DO { statement }
condition  --> expression COMPARSION expression
expression --> term + expression | term - expression | term
term       --> factor * term | factor / term | factor
factor     --> (expression) | NUM | ID
