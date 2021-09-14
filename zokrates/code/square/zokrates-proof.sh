cp ../out .
cp ../proving.key .
zokrates compute-witness -a $1 $2
zokrates generate-proof
rm out
rm proving.key
