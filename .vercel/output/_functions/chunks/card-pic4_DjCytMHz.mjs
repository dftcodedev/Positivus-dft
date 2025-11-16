const c4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/tmp/cc-agent/60266810/project/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

export { c4 as c };
