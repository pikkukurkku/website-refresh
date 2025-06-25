export const useRouter = () => ({
  push: (url: string) => console.log('Mock push to', url),
  replace: (url?: string) => console.log('Mock replace to', url),
  prefetch: (url?: string) => Promise.resolve(),
  back: () => console.log('Mock back'),
  forward: () => console.log('Mock forward'),
});
  
  let mockPathname = '/';
  
  export const usePathname = () => mockPathname;
  
  export const __setMockPathname = (pathname: string) => {
    mockPathname = pathname;
  };
  