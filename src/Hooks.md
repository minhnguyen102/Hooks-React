# useState
- Component được re-render sau khi setState được gọi => ĐÃ HIỂU (Ví dụ counter)
- Initial State chỉ dùng cho lần đầu
    - Nếu truyền callback => Lấy giá trị return là initial (Tránh lặp lại thao tác tính toán không cần thiêt) => ĐÃ HIỂU
- setState với callback (Kiến thức cần phải làm rõ hơn)
- Initial State với callback => ĐÃ HIỂU (ví dụ array.reduce)
- Set state là thay state bằng giá trị mới => ĐÃ HIỂU (ví dụ change info)