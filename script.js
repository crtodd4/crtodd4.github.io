
const THUMBS = {
  "game-night": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGExNjI4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhM2E2YiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iIzM3OEFERCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+R0FNRSBOSUdIVDwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjE3NSIgZm9udC1mYW1pbHk9IkFyaWFsIEJsYWNrLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjM2IiBmaWxsPSIjMzc4QUREIiBvcGFjaXR5PSIwLjE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iLTEiPkdSQVBISUNTPC90ZXh0PgogIDxyZWN0IHg9IjE2MCIgeT0iMTM4IiB3aWR0aD0iODAiIGhlaWdodD0iMiIgZmlsbD0iIzM3OEFERCIgb3BhY2l0eT0iMC41Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzM3OEFERCIgb3BhY2l0eT0iMC43IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMyI+U1BPUlRTIERFU0lHTjwvdGV4dD4KPC9zdmc+",
  "draft-day": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGQxZjNjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBmNDI3NSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iI0I1RDRGNCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+RFJBRlQgREFZPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMTc1IiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+UExBWUVSIENBUkRTPC90ZXh0PgogIDxyZWN0IHg9IjE2MCIgeT0iMTM4IiB3aWR0aD0iODAiIGhlaWdodD0iMiIgZmlsbD0iI0I1RDRGNCIgb3BhY2l0eT0iMC41Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iI0I1RDRGNCIgb3BhY2l0eT0iMC43IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMyI+U1BPUlRTIERFU0lHTjwvdGV4dD4KPC9zdmc+",
  "champ-merch": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDUxNTI1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBjMmQ1NSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iIzM3OEFERCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+Q0hBTVBJT05TSElQPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMTc1IiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+TUVSQ0g8L3RleHQ+CiAgPHJlY3QgeD0iMTYwIiB5PSIxMzgiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyIiBmaWxsPSIjMzc4QUREIiBvcGFjaXR5PSIwLjUiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMzc4QUREIiBvcGFjaXR5PSIwLjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj5TUE9SVFMgREVTSUdOPC90ZXh0Pgo8L3N2Zz4=",
  "athlete-hl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDYxMjIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBmMzQ2MSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iI0I1RDRGNCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+QVRITEVURTwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjE3NSIgZm9udC1mYW1pbHk9IkFyaWFsIEJsYWNrLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjM2IiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iLTEiPkhJR0hMSUdIVFM8L3RleHQ+CiAgPHJlY3QgeD0iMTYwIiB5PSIxMzgiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyIiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjUiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj5TUE9SVFMgREVTSUdOPC90ZXh0Pgo8L3N2Zz4=",
  "mvp-card": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDgwZjFlIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzEwMmE1MiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iIzM3OEFERCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+TVZQIFNFQVNPTjwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjE3NSIgZm9udC1mYW1pbHk9IkFyaWFsIEJsYWNrLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjM2IiBmaWxsPSIjMzc4QUREIiBvcGFjaXR5PSIwLjE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iLTEiPkNBUkRTPC90ZXh0PgogIDxyZWN0IHg9IjE2MCIgeT0iMTM4IiB3aWR0aD0iODAiIGhlaWdodD0iMiIgZmlsbD0iIzM3OEFERCIgb3BhY2l0eT0iMC41Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzM3OEFERCIgb3BhY2l0eT0iMC43IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMyI+U1BPUlRTIERFU0lHTjwvdGV4dD4KPC9zdmc+",
  "jersey-drop": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDQwYzE4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMjA0MCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iI0I1RDRGNCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+SkVSU0VZIERST1A8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjaywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgZmlsbD0iI0I1RDRGNCIgb3BhY2l0eT0iMC4xNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5DQU1QQUlHTjwvdGV4dD4KICA8cmVjdCB4PSIxNjAiIHk9IjEzOCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjMiPlNQT1JUUyBERVNJR048L3RleHQ+Cjwvc3ZnPg==",
  "q4-campaign": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGMxMzIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzE2MjAzNSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iIzM3OEFERCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+UTQgQlJBTkQ8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjaywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgZmlsbD0iIzM3OEFERCIgb3BhY2l0eT0iMC4xNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5BV0FSRU5FU1M8L3RleHQ+CiAgPHJlY3QgeD0iMTYwIiB5PSIxMzgiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyIiBmaWxsPSIjMzc4QUREIiBvcGFjaXR5PSIwLjUiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMzc4QUREIiBvcGFjaXR5PSIwLjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj5TT0NJQUwgQ0FNUEFJR048L3RleHQ+Cjwvc3ZnPg==",
  "launch-day": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGExNTI1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzEzMmI0YSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iI0I1RDRGNCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+UFJPRFVDVCBMQVVOQ0g8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjaywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgZmlsbD0iI0I1RDRGNCIgb3BhY2l0eT0iMC4xNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5TRVJJRVM8L3RleHQ+CiAgPHJlY3QgeD0iMTYwIiB5PSIxMzgiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyIiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjUiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj5DT1JQT1JBVEU8L3RleHQ+Cjwvc3ZnPg==",
  "rebrand": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDcxMDE4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBkMjI0MCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iIzM3OEFERCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+RlVMTCBSRUJSQU5EPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMTc1IiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+4oCUIFRFQ0ggRklSTTwvdGV4dD4KICA8cmVjdCB4PSIxNjAiIHk9IjEzOCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjMiPkNPUlBPUkFURTwvdGV4dD4KPC9zdmc+",
  "ig-system": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGIxNjI1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzE1MmQ0ZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iI0I1RDRGNCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+SU5TVEFHUkFNIENPTlRFTlQ8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjaywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgZmlsbD0iI0I1RDRGNCIgb3BhY2l0eT0iMC4xNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5TWVNURU08L3RleHQ+CiAgPHJlY3QgeD0iMTYwIiB5PSIxMzgiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyIiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjUiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjQjVENEY0IiBvcGFjaXR5PSIwLjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj5TT0NJQUwgQ0FNUEFJR048L3RleHQ+Cjwvc3ZnPg==",
  "brand-story": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMGExMDIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzExMWUzOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iIzM3OEFERCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjMzc4QUREIiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+QlJBTkQgU1RPUlk8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCBCbGFjaywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgZmlsbD0iIzM3OEFERCIgb3BhY2l0eT0iMC4xNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9Ii0xIj5DQU1QQUlHTjwvdGV4dD4KICA8cmVjdCB4PSIxNjAiIHk9IjEzOCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMzNzhBREQiIG9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjMiPkNPUlBPUkFURTwvdGV4dD4KPC9zdmc+",
  "social-pack": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDYwZTFhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBlMWUzNiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZykiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSI0MDAiIHkyPSIxNTAiIHN0cm9rZT0iI0I1RDRGNCIgc3Ryb2tlLXdpZHRoPSIwLjMiIG9wYWNpdHk9IjAuMDgiLz4KICA8bGluZSB4MT0iMjAwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjMwMCIgc3Ryb2tlPSIjQjVENEY0IiBzdHJva2Utd2lkdGg9IjAuMyIgb3BhY2l0eT0iMC4wOCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+U09DSUFMIE1FRElBPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMTc1IiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSItMSI+UEFDSzwvdGV4dD4KICA8cmVjdCB4PSIxNjAiIHk9IjEzOCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNCNUQ0RjQiIG9wYWNpdHk9IjAuNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjMiPlNPQ0lBTCBDQU1QQUlHTjwvdGV4dD4KPC9zdmc+",
};

const PROJECTS = [
  { id:"game-night",  title:"Game Night Graphics",      tag:"Sports Design",   date:"January 2025"   },
  { id:"draft-day",   title:"Draft Day Player Cards",   tag:"Sports Design",   date:"March 2025"     },
  { id:"champ-merch", title:"Championship Merch",       tag:"Sports Design",   date:"June 2025"      },
  { id:"athlete-hl",  title:"Athlete Highlights",       tag:"Sports Design",   date:"August 2025"    },
  { id:"mvp-card",    title:"MVP Season Cards",          tag:"Sports Design",   date:"October 2024"   },
  { id:"jersey-drop", title:"Jersey Drop Campaign",     tag:"Sports Design",   date:"December 2024"  },
  { id:"q4-campaign", title:"Q4 Brand Awareness",       tag:"Social Campaign", date:"November 2024"  },
  { id:"launch-day",  title:"Product Launch Series",    tag:"Corporate",       date:"February 2025"  },
  { id:"rebrand",     title:"Full Rebrand — Tech Firm", tag:"Corporate",       date:"April 2025"     },
  { id:"ig-system",   title:"Instagram Content System", tag:"Social Campaign", date:"July 2025"      },
  { id:"brand-story", title:"Brand Story Campaign",     tag:"Corporate",       date:"September 2025" },
  { id:"social-pack", title:"Social Media Pack",        tag:"Social Campaign", date:"December 2025"  },
];

let currentFilter = 'all';
let lbIndex = 0;
let lbProjects = [];

// ── Page switch
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  var key  = name.charAt(0).toUpperCase() + name.slice(1);
  var page = document.getElementById('page' + key);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-links button').forEach(function(b) { b.classList.remove('active'); });
  var navBtn = document.getElementById('nav' + key);
  if (navBtn) navBtn.classList.add('active');
  window.scrollTo(0, 0);
  // Update URL hash so the page is shareable / bookmarkable
  history.replaceState(null, '', '#' + name);
  if (name === 'gallery') { setTimeout(renderGallery, 20); }
  if (name === 'contact') {
    ['.contact-eyebrow','.contact-headline','.contact-sub','.contact-links'].forEach(function(sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  }
}

// Read hash on load to restore correct page
(function() {
  var hash = window.location.hash.replace('#', '').toLowerCase();
  var valid = { about: 1, gallery: 1, contact: 1 };
  if (hash && valid[hash]) {
    showPage(hash);
  }
})();

// Handle browser back/forward
window.addEventListener('hashchange', function() {
  var hash = window.location.hash.replace('#', '').toLowerCase();
  var valid = { about: 1, gallery: 1, contact: 1 };
  if (hash && valid[hash]) showPage(hash);
  else showPage('about');
});

// ── Gallery
function renderGallery(filter) {
  if (filter !== undefined) currentFilter = filter;
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  lbProjects = currentFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tag === currentFilter);
  lbProjects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'thumb-card';
    card.style.transitionDelay = (i % 6) * 0.07 + 's';
    card.innerHTML = `
      <img class="thumb-img" src="${THUMBS[p.id]}" alt="${p.title}" loading="lazy">
      <div class="thumb-overlay">
        <div class="thumb-label">
          <p class="thumb-tag">${p.tag}</p>
          <p class="thumb-title">${p.title}</p>
        </div>
      </div>
      <div class="thumb-expand">&#x26F6;</div>
      <div class="thumb-info-badge">
        <p class="badge-tag">${p.tag}</p>
        <p class="badge-title">${p.title}</p>
      </div>`;
    card.addEventListener('click', () => openLightbox(i));
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 50 + i * 70);
  });
  document.getElementById('lbTotal').textContent = lbProjects.length;
}

document.querySelectorAll('.ftab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});

// ── Lightbox
function openLightbox(i) {
  lbIndex = i; updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbStep(dir) {
  lbIndex = (lbIndex + dir + lbProjects.length) % lbProjects.length;
  const img = document.getElementById('lbImg');
  img.style.opacity = '0'; img.style.transform = 'scale(0.97)';
  setTimeout(() => { updateLightbox(); img.style.opacity = '1'; img.style.transform = 'scale(1)'; }, 180);
}
function updateLightbox() {
  const p = lbProjects[lbIndex];
  const img = document.getElementById('lbImg');
  img.src = THUMBS[p.id];
  img.style.opacity = '1'; img.style.transform = 'scale(1)';
  document.getElementById('lbTag').textContent   = p.tag;
  document.getElementById('lbTitle').textContent = p.title;
  document.getElementById('lbDate').textContent  = p.date;
  document.getElementById('lbCurrent').textContent = lbIndex + 1;
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lbStep(1);
  if (e.key === 'ArrowLeft')  lbStep(-1);
  if (e.key === 'Escape')     closeLightbox();
});

// ── Cursor glow — about page only
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
  const onAbout = document.getElementById('pageAbout').classList.contains('active');
  glow.style.opacity = onAbout ? '1' : '0';
});

// ── Nav shrink
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

// ── Photo reveal
(function() {
  var swap     = document.getElementById('photoSwap');
  var wrap     = document.getElementById('photoHoverWrap');
  var base     = document.getElementById('photoBase');
  if (!swap || !wrap || !base) return;

  var RADIUS   = 140;
  var isTouch  = !window.matchMedia('(hover: hover)').matches;

  // Reset any CSS-set mask so JS owns it fully
  wrap.style.webkitMaskImage = '';
  wrap.style.maskImage = '';

  if (!isTouch) {
    // ── DESKTOP: radial spotlight follows cursor ──
    function setRadial(x, y, r) {
      var v = 'radial-gradient(circle ' + r + 'px at ' + x + 'px ' + y + 'px, black 40%, transparent 100%)';
      wrap.style.webkitMaskImage = v;
      wrap.style.maskImage = v;
    }
    // Start hidden
    setRadial(0, 0, 0);

    swap.addEventListener('mouseenter', function() {
      wrap.style.transition = '-webkit-mask-image 0.3s ease, mask-image 0.3s ease';
    });
    swap.addEventListener('mousemove', function(e) {
      wrap.style.transition = 'none';
      var rect = swap.getBoundingClientRect();
      setRadial(e.clientX - rect.left, e.clientY - rect.top, RADIUS);
    });
    swap.addEventListener('mouseleave', function() {
      wrap.style.transition = '-webkit-mask-image 0.45s ease, mask-image 0.45s ease';
      setRadial(0, 0, 0);
    });

  } else {
    // ── MOBILE: slow opacity crossfade tied directly to scroll position ──
    // The hover image fades in as you scroll down past the photo,
    // and fades back out as you scroll back up. No swirl, no direction logic —
    // opacity mirrors scroll position so it always feels in sync.

    // Use CSS transition on the wrap's opacity instead of mask
    // so it works on all mobile browsers including Safari
    wrap.style.webkitMaskImage = 'none';
    wrap.style.maskImage = 'none';
    wrap.style.opacity = '0';
    wrap.style.transition = 'opacity 1.2s ease';
    base.style.transition = 'opacity 1.2s ease';

    function updateFromScroll() {
      var section = document.getElementById('aboutSection');
      if (!section) return;
      var rect    = section.getBoundingClientRect();
      var winH    = window.innerHeight;
      // progress: 0 when photo top is at bottom of screen, 1 when photo centre hits screen centre
      var photoMid  = rect.top + rect.height * 0.4;
      var progress  = 1 - Math.max(0, Math.min(1, photoMid / (winH * 0.7)));
      wrap.style.opacity = progress.toFixed(3);
      base.style.opacity = (1 - progress * 0.85).toFixed(3);
    }

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    updateFromScroll();
  }
})();
