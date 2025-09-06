const fs = require('fs');
const path = require('path');

// Files to update with their import patterns
const filesToUpdate = [
  {
    path: 'app/components/dashboard/submit-assignment/FirstStep.tsx',
    patterns: [
      { from: 'import Input from "@/app/components/ui/Input";', to: 'import { Input } from "@/app/components/ui/Input";' },
      { from: 'import Select from "../../ui/Select";', to: 'import { Select } from "../../ui/Select";' }
    ]
  },
  {
    path: 'app/components/dashboard/submit-assignment/FourthStep.tsx',
    patterns: [
      { from: 'import Input from "../../ui/Input";', to: 'import { Input } from "../../ui/Input";' }
    ]
  },
  {
    path: 'app/components/dashboard/submit-assignment/SecondStep.tsx',
    patterns: [
      { from: 'import Select from "../../ui/Select";', to: 'import { Select } from "../../ui/Select";' }
    ]
  },
  {
    path: 'app/components/dashboard/submit-assignment/ThirdStep.tsx',
    patterns: [
      { from: 'import Select from "../../ui/Select";', to: 'import { Select } from "../../ui/Select";' }
    ]
  },
  {
    path: 'app/admin/users/UsersFilters.tsx',
    patterns: [
      { from: 'import Select from "@/app/components/ui/Select";', to: 'import { Select } from "@/app/components/ui/Select";' }
    ]
  }
];

// Process each file
filesToUpdate.forEach(fileInfo => {
  const filePath = path.join(process.cwd(), fileInfo.path);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    fileInfo.patterns.forEach(pattern => {
      if (content.includes(pattern.from)) {
        content = content.replace(pattern.from, pattern.to);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in ${filePath}`);
    } else {
      console.log(`No changes needed for ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Import updates completed!');
