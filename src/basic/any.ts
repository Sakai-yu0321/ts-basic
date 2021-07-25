export default function anySample() {
  let name: any = 'Yu' //string型が代入されている
  console.log("any sample1:", typeof name, name);

  name = 28
  console.log("any sample2:", typeof name, name);
}