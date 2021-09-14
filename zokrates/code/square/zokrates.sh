zokrates compile -i ../square.code
zokrates setup
zokrates generate-proof
zokrates compute-witness -a $1 $2 
zokrates generate-proof
zokrates export-verifier
