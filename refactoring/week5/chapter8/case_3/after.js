export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(photoWithTitle(p.photo));

  return result.join('\n');
}

export function photoDiv(p) {
  return ['<div>', photoWithTitle(p), '</div>'].join('\n');
}

function photoWithTitle(p) {
  return [`<p>title: ${p.title}</p>`, emitPhotoData(p)].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}
