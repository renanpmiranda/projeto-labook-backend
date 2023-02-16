-- Active: 1675349537534@@127.0.0.1@3306

-- atualizar senhas para hashes bcrypt

UPDATE users
SET password = "$2a$12$QK0gac5Fb1VDrQ7mRvIqFuvorxsfa4HWw.u4sBggDN.KSbXw8r32O"
WHERE name = "Fulano";
-- plaintext = Fulano123

UPDATE users
SET password = "$2a$12$F4yo6wmgEBnf16MthjFNs.C1bcTLNdt7d4vnT5bi.ry5WK9pDIXuy"
WHERE name = "Beltrano";
-- plaintext = Beltrano123

UPDATE users
SET password = "$2a$12$wEe9bM3bGyo5Rw55C0vxFeqe2nJVT.oE5vL2mRR3/IJPPtmoB2yNm"
WHERE name = "Ciclano";
-- plaintext = Ciclano123

UPDATE users
SET password = "$2a$12$ePsEag6nG9/6QKoNV4KCcuaKWOEWxR6OHQWb3n9TPxhF9jnfU/L1K"
WHERE name = "Astrodev";
-- plaintext = astrodev123