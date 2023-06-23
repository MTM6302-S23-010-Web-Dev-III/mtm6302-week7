const employee = {
  name: "Jax",
  id: 897636,
  hireDate: 23,
  hireMonth: "Aug",
  hireYear: 2001,
  email: "jax@company.com",
  department: "Innovation",
  skills: ["UX", "prototyping", "research", "documentation"],
  address: {
    street: "123 Street",
    city: "Merlot"
  },
  selfIntro: function () {
    const introTemp = `Hi I am ${this.name}, I started working in ${this.department} since  ${this.hireDate} ${this.hireMonth}, ${this.hireYear}`
    return introTemp
  }
}

const empSection = document.getElementById("employee")

empSection.insertAdjacentHTML("afterbegin", `<h2>Welcome ${employee.name}!</h2>`)

// updating a property value
employee.department = "Innovation and Research"

const empInfo = `
<dl>
  <dt>ID</dt>
  <dd>${employee.id}<dd>
  <dt>Department</dt>
  <dd>${employee.department}<dd>
  <dt>Year Hired</dt>
  <dd>${employee.hireYear}<dd>
  <dt>Email</dt>
  <dd>${employee.email}<dd>
</dl>
`
empSection.insertAdjacentHTML("beforeend", empInfo)

const empSkills = employee.skills.join(", ")
empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} is skilled in ${empSkills}</p>`)

// adding a new property - not recommended, add properties in original object when declaring
employee.pronouns = "They/Them"
empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} uses pronouns ${employee.pronouns}</p>`)

empSection.insertAdjacentHTML("beforeend", `<p>Address: ${employee.address.street}, ${employee.address.city}</p>`)


empSection.insertAdjacentHTML("beforeend", employee.selfIntro())

console.log(Object.keys(employee))
console.log(Object.values(employee))
console.log(Object.entries(employee))


const employees = [
  {
    name: "Jax",
    id: 897636,
    hireDate: 23,
    hireMonth: "Aug",
    hireYear: 2001,
    email: "jax@company.com",
    department: "Innovation",
    skills: ["UX", "prototyping", "research", "documentation"],
    address: {
      street: "123 Street",
      city: "Merlot"
    }
  }, {
    name: "Jinx",
    id: 8989036,
    hireDate: 14,
    hireMonth: "July",
    hireYear: 2012,
    email: "jinx@company.com",
    department: "Innovation",
    skills: ["database", "prototyping", "research", "documentation"],
    address: {
      street: "345 Street",
      city: "Merlot"
    }
  }
]

for (person of employees) {
  console.log(person.name)
}

/* Looping over array of employees to create multiple cards


for (employee of employees) {
  empSection.insertAdjacentHTML("beforeend", `<h2>Welcome ${employee.name}!</h2>`)

  // updating a property value
  employee.department = "Innovation and Research"

  const empInfo = `
<dl>
  <dt>ID</dt>
  <dd>${employee.id}<dd>
  <dt>Department</dt>
  <dd>${employee.department}<dd>
  <dt>Year Hired</dt>
  <dd>${employee.hireYear}<dd>
  <dt>Email</dt>
  <dd>${employee.email}<dd>
</dl>
`
  empSection.insertAdjacentHTML("beforeend", empInfo)

  const empSkills = employee.skills.join(", ")
  empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} is skilled in ${empSkills}</p>`)

  // adding a new property - not recommended, add properties in original object when declaring
  employee.pronouns = "They/Them"
  empSection.insertAdjacentHTML("beforeend", `<p>${employee.name} uses pronouns ${employee.pronouns}</p>`)

  empSection.insertAdjacentHTML("beforeend", `<p>Address: ${employee.address.street}, ${employee.address.city}</p>`)


  // empSection.insertAdjacentHTML("beforeend", employee.selfIntro())
}


*/