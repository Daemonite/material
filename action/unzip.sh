#!/bin/sh

for q in $(seq 0 25)
do
  for qa in M N O P Q R S T
  do
    for qb in $(seq 11 19)
    do
      pw=M3ABCHI087$q$qa$qb
      7za e -bd -o{77}/$pw/ -p{$pw} -w -y in.7z
    done
  done
 done
