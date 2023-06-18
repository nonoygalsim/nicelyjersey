import productJson from './product.json';
import blogJson from './blog.json';
import serviceJson from './services.json';
/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  const filtered = products.filter((item) => item.tags.includes(tag));
  return filtered.slice(0, count);
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}
function generateMockServiceData(count) {
  return serviceJson.slice(0, count);
}

export {
  generateMockProductData,
  generateMockBlogData,
  generateMockServiceData,
};
