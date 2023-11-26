export const fetchContacts = async () => {
  const data = await fetch(
    `https://6563c5d4ceac41c0761d1a2b.mockapi.io/contacts/`
  );
  const contacts = await data.json();
  return contacts;
};

export const addContacts = async newContact => {
  const data = await fetch(
    `https://6563c5d4ceac41c0761d1a2b.mockapi.io/contacts/`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newContact),
    }
  );

  const addedData = await data.json();
  return await addedData;
};

export const deleteContacts = async id => {
  const data = await fetch(
    `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );

  const deleteRes = await data.json();
  return await deleteRes;
};
