
# Webspiders api

Here are the api's created using Express JS for perform task crud operations.

## API Reference

#### Get all tasks
This is a tasks api to get all tasks
```http
  GET /api/tasks
```
## Response

```response
    "task": [
        {
            "_id": "67551ee6d43754fdffa01d23",
            "title": "read book",
            "description": "Harry potter series",
            "status": "IN_PROGESS",
            "priority": "LOW",
            "dueDate": "2024-12-08T03:53:01.000Z",
            "createdAt": "2024-12-08T03:53:01.000Z",
            "updatedAt": "2024-12-08T03:53:01.000Z",
            "__v": 0
        },
        {
            "_id": "67551f1031942eca9b7e908d",
            "title": "read book",
            "description": "Harry potter series",
            "status": "IN_PROGESS",
            "priority": "LOW",
            "dueDate": "2024-12-08T03:53:01.000Z",
            "createdAt": "2024-12-08T03:53:01.000Z",
            "updatedAt": "2024-12-08T03:53:01.000Z",
            "__v": 0
        },
        {
            "_id": "675523497ce2e38756145ed9",
            "id": "1733632666647",
            "title": "read book",
            "description": "Harry potter series",
            "status": "IN_PROGESS",
            "priority": "LOW",
            "dueDate": "2024-12-08T03:53:01.000Z",
            "createdAt": "2024-12-08T03:53:01.000Z",
            "updatedAt": "2024-12-08T03:53:01.000Z",
            "__v": 0
        }
    ]

```

#### create tasks

```http
  POST /api/tasks/
```

## Request body
```request
{
    "title":"read book",
    "description":"Harry potter series",
    "status":"IN_PROGESS",
    "priority":"LOW",
    "dueDate":"Sun Dec 08 2024 09:23:01 GMT+0530",
    "createdAt":"Sun Dec 08 2024 09:23:01 GMT+0530",
    "updatedAt":"Sun Dec 08 2024 09:23:01 GMT+0530"
}
```


#### Edit Task

```http
  PUT /api/tasks/${id}
```

### Request 
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Unique** |


```bash
{
    "task": {
        "_id": "675523497ce2e38756145ed9",
        "id": "1733632666647",
        "title": "read book",
        "description": "Harry potter series",
        "status": "IN_PROGESS",
        "priority": "LOW",
        "dueDate": "2024-12-08T03:53:01.000Z",
        "createdAt": "2024-12-08T03:53:01.000Z",
        "updatedAt": "2024-12-08T03:53:01.000Z",
        "__v": 0
    }

```
#### delete Task 

```http
  DELETE /api/tasks/${id}
```
### Request 

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Unique** |

