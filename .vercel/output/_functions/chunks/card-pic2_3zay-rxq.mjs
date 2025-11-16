const c2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/tmp/cc-agent/60266810/project/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

export { c2 as c };
