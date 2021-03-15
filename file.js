function f() {
  let a = 3;
  function c() {
    console.log(a);
  }
  return c;
}

let r = f();
r();

const Root = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const inter = setInterval(tick, 1000);
  }, []);

  return <div>{count}</div>;
};
