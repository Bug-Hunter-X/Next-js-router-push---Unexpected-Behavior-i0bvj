```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Solution: Use router.replace() for non-history-tracked navigation
    router.replace('/'); 
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back home</button>
    </div>
  );
}
```
The problem is caused by how `router.push()` maintains the browser's history stack. If you are navigating back to the previous page and don't want the user to be able to use the browser's back button to return to the `About` page, you should use `router.replace()` instead.  `router.replace()` will replace the current entry in the history stack, preventing the back button from returning to the previous page.  If you want to preserve history, use `router.push()`.